import LabeledInput from "components/molecules/LabeledInput/LabeledInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/atoms/Button/Button";
import { LoginWrapper } from "./Login.styles";
import * as yup from "yup";
import { useAuth } from "providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "components/molecules/Alert/Alert";
import { motion, Variants } from "framer-motion";

type LoginProps = {};

type FormInputs = {
  email: string;
  password: string;
};

type LocationState = {
  from?: {
    path: string;
  };
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Can't be empty"),
    password: yup.string().required("Can't be empty"),
  })
  .required();

const loginVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Login = (props: LoginProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as LocationState;
  const from = locationState?.from?.path || "/";

  const { logIn, user } = useAuth();

  const navigateToPreviousPage = useCallback(() => {
    navigate(from, { replace: true });
  }, [navigate, from]);

  const [alert, setAlert] = useState("");

  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    logIn(data, navigateToPreviousPage, setAlert);

  useEffect(() => {
    if (user) {
      navigateToPreviousPage();
    }
  }, [user, navigateToPreviousPage]);

  return (
    <>
      <LoginWrapper
        variants={loginVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabeledInput
            {...register("email")}
            error={errors.email?.message}
            label="Email"
          ></LabeledInput>
          <LabeledInput
            {...register("password")}
            type="password"
            error={errors.password?.message}
            label="Password"
          ></LabeledInput>
          <Button type="submit" variant="primary">
            Log in
          </Button>
          {alert.length ? <Alert variant="danger">{alert}</Alert> : null}
        </form>
      </LoginWrapper>
    </>
  );
};

export default Login;

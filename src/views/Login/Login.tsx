import LabeledInput from "components/molecules/LabeledInput/LabeledInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/atoms/Button/Button";
import { LoginWrapper } from "./Login.styles";
import * as yup from "yup";
import { useAuth } from "providers/AuthProvider";
import { useState } from "react";
import { Alert } from "components/molecules/Alert/Alert";
import { Variants } from "framer-motion";

type LoginProps = {};

type FormInputs = {
  email: string;
  password: string;
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

  const { logIn } = useAuth();

  const [alert, setAlert] = useState("");

  const onSubmit: SubmitHandler<FormInputs> = (data) => logIn(data, setAlert);

  return (
    <>
      <LoginWrapper variants={loginVariants} initial="hidden" animate="visible">
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
          <Alert variant="warning">
            <p>Try these credentials</p>
            <p>Email: test123@test123.com</p>
            <p>Password: Test123</p>
          </Alert>
        </form>
      </LoginWrapper>
    </>
  );
};

export default Login;

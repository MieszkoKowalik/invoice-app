import LabeledInput from "components/molecules/LabeledInput/LabeledInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/atoms/Button/Button";
import { LoginWrapper } from "./Login.styles";
import * as yup from "yup";
import { useAuth } from "providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Alert } from "components/molecules/Alert/Alert";
type Props = {};

interface FormInputs {
  email: string;
  password: string;
}

interface LocationState {
  from?: {
    path: string;
  };
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Can't be empty"),
    password: yup.string().required("Can't be empty"),
  })
  .required();

const Login = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as LocationState;
  const from = locationState?.from?.path || "/";

  const { logIn } = useAuth();

  const navigateToPreviousPage = () => {
    navigate(from, { replace: true });
  };

  const [alert, setAlert] = useState("");

  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    logIn(data, navigateToPreviousPage, setAlert);

  return (
    <>
      <LoginWrapper onSubmit={handleSubmit(onSubmit)}>
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
      </LoginWrapper>
    </>
  );
};

export default Login;

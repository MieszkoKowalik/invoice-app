import LabeledInput from "components/molecules/LabeledInput/LabeledInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/atoms/Button/Button";
import { LoginWrapper } from "./Login.styles";
import * as yup from "yup";

type Props = {};

interface FormInputs {
  email: string;
  password: string;
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

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

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
        <Button variant="primary">Log in</Button>
      </LoginWrapper>
    </>
  );
};

export default Login;

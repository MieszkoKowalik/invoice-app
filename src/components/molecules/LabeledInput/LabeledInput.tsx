import React from "react";
import { Input } from "components/atoms/Input/Input";
import LabelAndError from "../LabelAndError/LabelAndError";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const LabeledInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }: Props, ref) => {
    return (
      <LabelAndError label={label} error={error}>
        <Input error={error} ref={ref} {...props} />
      </LabelAndError>
    );
  }
);

export default LabeledInput;

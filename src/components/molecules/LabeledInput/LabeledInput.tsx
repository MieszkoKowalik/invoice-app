import React from "react";
import { Input } from "components/atoms/Input/Input";
import { StyledLabel } from "./LabeledInput.styles";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const LabeledInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }: Props, ref) => {
    return (
      <StyledLabel error={error}>
        {label}
        {error && <span>{error}</span>}

        <Input error={error} ref={ref} {...props} />
      </StyledLabel>
    );
  }
);

export default LabeledInput;

import React from "react";
import { Input } from "components/atoms/Input/Input";
import { StyledLabel } from "./LabeledInput.styles";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const LabeledInput = ({ label, ...props }: Props) => {
  return (
    <StyledLabel>
      {label}
      <Input {...props} />
    </StyledLabel>
  );
};

export default LabeledInput;

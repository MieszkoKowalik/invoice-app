import React from "react";
import { Input } from "components/atoms/Input/Input";
import { StyledLabel, ErrorSpan, LabelWrapper } from "./LabeledInput.styles";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const LabeledInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }: Props, ref) => {
    return (
      <StyledLabel error={error}>
        <LabelWrapper>
          <span>{label}</span>
          {error && <ErrorSpan>{error}</ErrorSpan>}
        </LabelWrapper>
        <Input error={error} ref={ref} {...props} />
      </StyledLabel>
    );
  }
);

export default LabeledInput;

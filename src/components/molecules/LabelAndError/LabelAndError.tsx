import { ReactNode } from "react";
import { StyledLabel, LabelWrapper } from "./LabelAndError.styles";
import { ErrorSpan } from "components/atoms/ErrorSpan/ErrorSpan";

type LabelAndErrorProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

const LabelAndError = ({ error, label, children }: LabelAndErrorProps) => {
  return (
    <StyledLabel error={error}>
      <LabelWrapper>
        <span>{label}</span>
        {error && <ErrorSpan>{error}</ErrorSpan>}
      </LabelWrapper>
      {children}
    </StyledLabel>
  );
};

export default LabelAndError;

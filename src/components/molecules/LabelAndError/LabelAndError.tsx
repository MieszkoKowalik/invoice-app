import { ReactNode } from "react";
import { StyledLabel, LabelWrapper } from "./LabelAndError.styles";
import { ErrorSpan } from "components/atoms/ErrorSpan/ErrorSpan";
type Props = {
  label: string;
  error?: string;
  children: ReactNode;
};

const LabelAndError = ({ error, label, children }: Props) => {
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

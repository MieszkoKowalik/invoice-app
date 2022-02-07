import { ReactNode } from "react";
import { StyledLabel, LabelWrapper, ErrorSpan } from "./LabelAndError.styles";

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

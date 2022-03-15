import React from "react";
import { Props } from "react-select";
import LabelAndError from "../LabelAndError/LabelAndError";
import { StyledSelect } from "./CustomSelect.styles";

type SelectProps = Props & {
  label: string;
  error?: string;
};

const CustomSelect = React.forwardRef<any, SelectProps>(
  ({ label, error, theme, ...props }: SelectProps, ref) => {
    return (
      <LabelAndError label={label} error={error}>
        <StyledSelect
          error={error}
          ref={ref}
          {...props}
          classNamePrefix="react-select"
        ></StyledSelect>
      </LabelAndError>
    );
  }
);

export default CustomSelect;

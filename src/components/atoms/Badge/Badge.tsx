import { Wrapper } from "./Badge.styles";
import { Status } from "types";

export type BadgeProps = {
  variant: Status;
  className?: string;
};

const Badge = ({ variant, className }: BadgeProps) => {
  return (
    <Wrapper className={className} variant={variant}>
      <span></span>
      {variant}
    </Wrapper>
  );
};

export default Badge;

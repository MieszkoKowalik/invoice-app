import { Wrapper } from "./Badge.styles";

export type BadgeProps = {
  variant: "paid" | "pending" | "draft";
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

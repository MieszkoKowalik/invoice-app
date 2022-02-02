import { Wrapper } from "./Badge.styles";

export interface BadgeProps {
  variant: "paid" | "pending" | "draft";
}

const Badge = ({ variant }: BadgeProps) => {
  return (
    <Wrapper variant={variant}>
      <span></span>
      {variant}
    </Wrapper>
  );
};

export default Badge;

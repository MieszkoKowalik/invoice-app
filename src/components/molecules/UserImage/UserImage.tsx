import { ReactComponent as UserIcon } from "assets/images/icon-user.svg";
import { Wrapper } from "./UserImage.styles";

type UserImageProps = { source?: string };

const UserImage = ({ source }: UserImageProps) => {
  return (
    <Wrapper>{source ? <img src={source} alt="User" /> : <UserIcon />}</Wrapper>
  );
};

export default UserImage;

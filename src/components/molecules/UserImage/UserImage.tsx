import { ReactComponent as UserIcon } from "assets/images/icon-user.svg";
import { Wrapper } from "./UserImage.styles";

type Props = { source?: string };

const UserImage = ({ source }: Props) => {
  return (
    <Wrapper>{source ? <img src={source} alt="User" /> : <UserIcon />}</Wrapper>
  );
};

export default UserImage;

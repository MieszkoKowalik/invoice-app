import { ReactComponent as Logo } from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Wrapper, LogoWrapper, UserWrapper, Panel } from "./Navbar.styles";
import UserImage from "components/molecules/UserImage/UserImage";
import ThemeToggler from "components/molecules/ThemeToggler/ThemeToggler";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <Panel>
        <ThemeToggler />
        <UserWrapper>
          <UserImage />
        </UserWrapper>
      </Panel>
    </Wrapper>
  );
};

export default Navbar;

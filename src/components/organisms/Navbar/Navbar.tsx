import { ReactComponent as Logo } from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Wrapper, LogoWrapper, UserWrapper, Panel } from "./Navbar.styles";
import UserImage from "components/molecules/UserImage/UserImage";
import ThemeToggler from "components/molecules/ThemeToggler/ThemeToggler";
import { useAuth } from "providers/AuthProvider";
import { TransparentButton } from "components/atoms/TransparentButton/TransparentButton";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  const { user, logOut } = useAuth();

  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <Panel>
        <ThemeToggler />
        {user ? (
          <TransparentButton type="button" onClick={logOut}>
            Log Out
          </TransparentButton>
        ) : null}
        <UserWrapper>
          <UserImage />
        </UserWrapper>
      </Panel>
    </Wrapper>
  );
};

export default Navbar;

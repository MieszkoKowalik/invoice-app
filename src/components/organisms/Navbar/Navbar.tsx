import { ReactComponent as Logo } from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Wrapper, LogoWrapper, UserWrapper, Panel } from "./Navbar.styles";
import UserImage from "components/molecules/UserImage/UserImage";
import ThemeToggler from "components/molecules/ThemeToggler/ThemeToggler";
import { useAuth } from "providers/AuthProvider";
type Props = {};

const Navbar = (props: Props) => {
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
          <button type="button" onClick={logOut}>
            Sign Out
          </button>
        ) : null}
        <UserWrapper>
          <UserImage />
        </UserWrapper>
      </Panel>
    </Wrapper>
  );
};

export default Navbar;

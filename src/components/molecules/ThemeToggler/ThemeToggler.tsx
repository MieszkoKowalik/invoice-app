import { useContext } from "react";
import { ReactComponent as SunIcon } from "assets/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "assets/images/icon-moon.svg";
import { ThemesContext } from "providers/ThemesProvider";
import { StyledLabel, IconsWrapper } from "./ThemeToggler.styles";
type Props = {};
const spring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};
const ThemeToggler = (props: Props) => {
  const { isDarkMode, toggleTheme } = useContext(ThemesContext);
  return (
    <StyledLabel htmlFor="dark-mode">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        name="DarkMode"
        id="dark-mode"
      />
      <IconsWrapper layout transition={spring}>
        <span>
          <SunIcon></SunIcon>
        </span>
        <span>
          <MoonIcon></MoonIcon>
        </span>
      </IconsWrapper>
    </StyledLabel>
  );
};

export default ThemeToggler;

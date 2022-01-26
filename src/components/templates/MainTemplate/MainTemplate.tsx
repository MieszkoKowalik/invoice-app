import Navbar from "components/organisms/Navbar/Navbar";
import { ReactNode } from "react";
import { Grid } from "./MainTemplate.styles";

type Props = {
  children?: ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <Grid>
      <Navbar></Navbar>
      <main>{children}</main>
    </Grid>
  );
};

export default MainTemplate;

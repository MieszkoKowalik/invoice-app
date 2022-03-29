import { Wrapper, StatusWrapper } from "./StatusBar.styles";
import { Text } from "components/atoms/Text/Text";
import Badge from "components/atoms/Badge/Badge";
import { Status } from "types";
import InvoiceControls from "components/molecules/InvoiceControls/InvoiceControls";
import { useTheme } from "styled-components";
import useMediaQuery from "hooks/useMediaQuery";

type StatusBarProps = {
  status: Status;
};

const StatusBar = ({ status }: StatusBarProps) => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.m);

  return (
    <Wrapper>
      <StatusWrapper>
        <Text>Status</Text>
        <Badge variant={status} />
      </StatusWrapper>
      {isTablet && <InvoiceControls status={status} />}
    </Wrapper>
  );
};

export default StatusBar;

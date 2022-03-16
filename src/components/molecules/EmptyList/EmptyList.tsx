import { ReactComponent as IllustrationEmpty } from "assets/images/illustration-empty.svg";
import { Text } from "components/atoms/Text/Text";
import useMediaQuery from "hooks/useMediaQuery";
import { useTheme } from "styled-components";
import { Wrapper } from "./EmptyList.styles";

type EmptyListProps = {};

const EmptyList = (props: EmptyListProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.m);

  return (
    <Wrapper>
      <IllustrationEmpty />
      <h2>There is nothing here</h2>
      <Text>
        Create an invoice by clicking the{" "}
        <strong>New{isTablet && "\u00A0Invoice"}</strong> button and get started
      </Text>
    </Wrapper>
  );
};

export default EmptyList;

import { ReactComponent as IllustrationEmpty } from "assets/images/illustration-empty.svg";
import { Text } from "components/atoms/Text/Text";
import { Wrapper } from "./EmptyList.styles";

type EmptyListProps = {};

const EmptyList = (props: EmptyListProps) => {
  return (
    <Wrapper>
      <IllustrationEmpty />
      <h2>There is nothing here</h2>
      <Text>
        Create a new invoice by clicking the <strong>New&nbsp;Invoice</strong>{" "}
        button and get started
      </Text>
    </Wrapper>
  );
};

export default EmptyList;

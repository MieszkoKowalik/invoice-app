import { ReactComponent as IllustrationEmpty } from "assets/images/illustration-empty.svg";
import { Wrapper } from "./EmptyList.styles";

type EmptyListProps = {};

const EmptyList = (props: EmptyListProps) => {
  return (
    <Wrapper>
      <IllustrationEmpty />
      <h2>There is nothing here</h2>
      <p>
        Create a new invoice by clicking the <span>New&nbsp;Invoice</span>{" "}
        button and get started
      </p>
    </Wrapper>
  );
};

export default EmptyList;

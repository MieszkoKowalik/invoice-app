import React from "react";
import { Wrapper, StatusWrapper } from "./StatusBar.styles";
import { Text } from "components/atoms/Text/Text";
import Badge from "components/atoms/Badge/Badge";
import { Status } from "types";

type StatusBarProps = {
  status: Status;
};

const StatusBar = ({ status }: StatusBarProps) => {
  return (
    <Wrapper>
      <StatusWrapper>
        <Text>Status</Text>
        <Badge variant={status} />
      </StatusWrapper>
    </Wrapper>
  );
};

export default StatusBar;

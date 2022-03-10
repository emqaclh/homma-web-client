import React, { FC } from "react";
import { Button, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import { CircleIcon } from "../Misc/CircleIcon";

type SessionType = {
  id: string;
  name: string;
};

interface StatusProps {
  sessions: Array<SessionType>;
}

const Status: FC<StatusProps> = (props) => {
  const { sessions } = props;

  return (
    <Grid
      width="12em"
      maxWidth="80%"
      height="6em"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(6, 1fr)"
      rowGap="0.2em"
    >
      <GridItem colSpan={1} rowSpan={1} justifySelf="center" alignSelf="center">
        <CircleIcon marginTop="-0.3em" color="red.400" />
      </GridItem>
      <GridItem colSpan={5} rowSpan={1} justifySelf="left" alignSelf="left">
        <Text fontWeight="semibold">Connected</Text>
      </GridItem>
      <GridItem
        colSpan={6}
        rowSpan={2}
        justifySelf="center"
        alignSelf="center"
        textAlign="center"
        height="100%"
        width="90%"
      >
        <Select placeholder="Select a session...">
          {sessions.map((session) => (
            <option value={session.id}>{session.name}</option>
          ))}
        </Select>
      </GridItem>
      <GridItem
        colSpan={3}
        rowSpan={2}
        alignSelf="center"
        textAlign="center"
        height="1.6em"
        width="6em"
      >
        <Button width="90%" height="100%">
          New
        </Button>
      </GridItem>
      <GridItem
        colSpan={3}
        rowSpan={2}
        alignSelf="center"
        textAlign="center"
        height="1.6em"
        width="6em"
      >
        <Button width="90%" height="100%">
          Connect
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Status;

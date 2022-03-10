import React from "react";
import {
  Container,
  Tooltip,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react";
import { RiWindow2Fill } from "react-icons/ri";
import { CircleIcon } from "../Misc/CircleIcon";

type feature = { name: string; datatype: "numerical" | "no-numerical" };
interface CollapsedFeaturesProps {
  features: feature[];
}

const CollapsedFeatures = ({ features }: CollapsedFeaturesProps) => {
  return (
    <Flex
      width="16em"
      height="4em"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <CircleIcon width="5%" />
      <Tooltip label={<CollapsedContent features={features} />}>
        <CircleIcon width="8%" />
      </Tooltip>
      <CircleIcon width="5%" />
    </Flex>
  );
};

const CollapsedContent = ({ features }: CollapsedFeaturesProps) => (
  <Container>
    <Text fontWeight="semi-bold">Collapsed features:</Text>
    <List>
      {features.map((feature) => (
        <ListItem>
          <ListIcon as={RiWindow2Fill} />
          {feature.name}
        </ListItem>
      ))}
    </List>
  </Container>
);

export default CollapsedFeatures;

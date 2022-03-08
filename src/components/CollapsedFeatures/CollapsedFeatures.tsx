import React from "react";
import {
  Container,
  Icon,
  VStack,
  Tooltip,
  Text,
  Badge,
  List,
  ListItem,
  ListIcon,
  chakra,
  Flex,
} from "@chakra-ui/react";
import { RiWindow2Fill } from "react-icons/ri";

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

const CircleIcon = (props: any) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export default CollapsedFeatures;

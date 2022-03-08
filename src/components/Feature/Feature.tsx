import React from "react";

import {
  Text,
  Tooltip,
  Spinner,
  useColorModeValue,
  IconButton,
  Icon,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  RiBookmark3Line,
  RiEyeOffLine,
  RiAlertLine,
  RiMoreFill,
  RiBarChartBoxLine,
  RiSeparator,
} from "react-icons/ri";
import { motion } from "framer-motion";

interface FeatureProps {
  label?: string;
  color?: string;
  warning?: string;
  mode: "hover" | "active" | "placeholder" | "loading" | "empty";
  isPrimary?: boolean;
}

const MotionGrid = motion(Grid);

const Feature = ({
  label,
  color,
  warning,
  mode = "placeholder",
  isPrimary = false,
}: FeatureProps) => {
  const warningBadge = warning != undefined && warning !== "";

  const backgroundColor: string = useColorModeValue("white", "gray.800");
  const borderColor: string = useColorModeValue("gray.400", "white");

  return (
    <MotionGrid
      backgroundColor={mode == "hover" ? color : backgroundColor}
      borderColor={mode != "hover" ? borderColor : backgroundColor}
      borderStyle="solid"
      borderRadius="lg"
      borderWidth="1px"
      width="16em"
      height="4em"
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(2, 1fr)"
      lineHeight="thick"
      isTruncated
      fontWeight="semibold"
      letterSpacing="wide"
      whileHover={{ scale: 1.045 }}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Flex flexDirection="row" alignItems="flex-start" marginTop="0.2em">
          {isPrimary && <Icon as={RiBookmark3Line} marginLeft="0.4em" />}
          {warningBadge && (
            <Tooltip label={warning} placement="auto">
              <Icon as={RiAlertLine} marginLeft="0.4em" />
            </Tooltip>
          )}
        </Flex>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} textAlign="right" marginTop="-0.6em">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Feature options"
            icon={<Icon as={RiMoreFill} />}
            variant="unstyled"
            top="0.2em"
          />
          <MenuList marginTop="-0.8em">
            {!isPrimary && (
              <MenuItem icon={<Icon as={RiBookmark3Line} />}>
                Set as Primary
              </MenuItem>
            )}
            <MenuItem icon={<Icon as={RiBarChartBoxLine} />}>Inspect</MenuItem>
            <MenuItem icon={<Icon as={RiEyeOffLine} />}>Collapse/Hide</MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
      <GridItem
        rowSpan={4}
        colSpan={2}
        textAlign="center"
        verticalAlign="middle"
      >
        {mode == "hover" || mode == "active" ? (
          <Tooltip label={label} placement="top">
            <Text isTruncated>{label}</Text>
          </Tooltip>
        ) : mode == "loading" ? (
          <Spinner />
        ) : mode == "placeholder" ? (
          <Icon as={RiSeparator} />
        ) : mode == "empty" ? (
          <Icon as={RiMoreFill} />
        ) : null}
      </GridItem>
    </MotionGrid>
  );
};

export default Feature;

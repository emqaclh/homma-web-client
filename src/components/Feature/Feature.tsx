import React from "react";

import {
  Text,
  Center,
  Tooltip,
  Spinner,
  useColorModeValue,
  IconButton,
  Icon,
  Container,
  HStack,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Flex,
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

const MotionContainer = motion(Container);

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
    <MotionContainer
      position="relative"
      width="16em"
      height="4em"
      display="inline-block"
      verticalAlign="top"
      whileHover={{ scale: 1.038 }}
    >
      <>
        <Center
          backgroundColor={mode == "hover" ? color : backgroundColor}
          borderColor={mode != "hover" ? borderColor : backgroundColor}
          borderStyle="solid"
          borderRadius="lg"
          borderWidth="1px"
          overflow="hidden"
          lineHeight="thick"
          isTruncated
          fontWeight="semibold"
          letterSpacing="wide"
          position="absolute"
          width="100%"
          height="100%"
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
        </Center>
        {mode == "hover" && (
          <HStack
            justify="space-between"
            as="div"
            position="absolute"
            top="5%"
            width="100%"
            height="25%"
          >
            <Flex
              direction="row"
              as="div"
              width="3em"
              marginTop="0.2em"
              alignItems="flex-start"
            >
              {isPrimary && <Icon as={RiBookmark3Line} marginLeft="0.4em" />}
              {warningBadge && (
                <Tooltip label={warning} placement="auto">
                  <Icon as={RiAlertLine} marginLeft="0.4em" />
                </Tooltip>
              )}
            </Flex>
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
                <MenuItem icon={<Icon as={RiBarChartBoxLine} />}>
                  Inspect
                </MenuItem>
                <MenuItem icon={<Icon as={RiEyeOffLine} />}>
                  Collapse/Hide
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        )}
      </>
    </MotionContainer>
  );
};

export default Feature;

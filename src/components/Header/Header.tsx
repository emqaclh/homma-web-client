import React from "react";
import {
  Center,
  Container,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiEditLine, RiAddBoxLine } from "react-icons/ri";
import { motion } from "framer-motion";

import AddDatasetModal from "./AddDatasetModal";

interface HeaderProps {
  tag?: string;
  color?: string;
  mode: "active" | "placeholder" | "loading" | "empty";
}

const MotionCenter = motion(Center);

const Header = ({ tag, color, mode }: HeaderProps) => {
  const backgroundColor: string = useColorModeValue("white", "gray.800");
  const mainText: string =
    mode === "active"
      ? tag!
      : mode === "placeholder"
      ? "Add"
      : mode === "loading"
      ? "Loading..."
      : "...";

  return (
    <Container
      position="relative"
      width="16em"
      height="4em"
      display="inline-block"
      verticalAlign="top"
    >
      <MotionCenter
        backgroundColor={mode == "active" ? color : backgroundColor}
        borderRadius="lg"
        fontWeight="semibold"
        letterSpacing="wide"
        lineHeight="thick"
        isTruncated
        position="absolute"
        width="8%"
        height="100%"
        whileHover={{ width: "100%" }}
      >
        <HStack>
          {(mode === "active" || mode === "placeholder") && (
            <IconButton
              marginTop="0.225em"
              variant="unstyled"
              aria-label={mode === "active" ? "Edit dataset" : "Add dataset"}
              icon={<Icon as={mode === "active" ? RiEditLine : RiAddBoxLine} />}
            />
          )}
          {mode === "loading" && <Spinner />}
          <Text>{mainText}</Text>
        </HStack>
      </MotionCenter>
    </Container>
  );
};

export default Header;

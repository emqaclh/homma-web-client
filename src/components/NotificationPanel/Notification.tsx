import React from "react";
import { chakra, Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { RiAlertLine, RiCloseCircleLine, RiArrowRightDownLine, RiArrowLeftUpLine } from "react-icons/ri";

export interface NotificationProps {
    type: 'in' | 'out' | 'warn' | 'error',
    text: string
}

const notificationProperties = {
    in: {title: 'Received', icon: RiArrowRightDownLine},
    out: {title: 'Sent', icon: RiArrowLeftUpLine},
    warn: {title: 'Warning', icon: RiAlertLine},
    error: {title: 'Error', icon: RiCloseCircleLine}
}

const Notification = ({type, text}: NotificationProps) => {

    const {title, icon} = notificationProperties[type];

    return (
        <Flex
          width="full"
          background="gray.600"
          padding={50}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            maxWidth="sm"
            width="full"
            mx="auto"
            background={useColorModeValue("white", "gray.800")}
            shadow="md"
            rounded="lg"
            overflow="hidden"
          >
            <Flex justifyContent="center" alignItems="center" w={12} background="blue.500">
              <Icon as={icon} color="white" boxSize={6} />
            </Flex>
    
            <Box mx={-3} py={2} px={4}>
              <Box mx={3}>
                <chakra.span
                  color={useColorModeValue("blue.500", "blue.400")}
                  fontWeight="bold"
                >
                  {title}
                </chakra.span>
                <chakra.p
                  color={useColorModeValue("gray.600", "gray.200")}
                  fontSize="sm"
                >
                  {text}
                </chakra.p>
              </Box>
            </Box>
          </Flex>
        </Flex>
      );
};

export default Notification;
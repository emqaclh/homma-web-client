import React from "react";
import { VStack } from "@chakra-ui/react";

import Notification, { NotificationProps} from "./Notification";

interface NotificationPanelProps {
    notifications: NotificationProps[]
}

const NotificationPanel = ({notifications}: NotificationPanelProps) => {
    return(
        <VStack padding='5%' overflowY='auto'>
            { notifications.map((notification) =>
                <Notification type={notification.type} text={notification.text} />
            )}
        </VStack>
    )
}

export default NotificationPanel;
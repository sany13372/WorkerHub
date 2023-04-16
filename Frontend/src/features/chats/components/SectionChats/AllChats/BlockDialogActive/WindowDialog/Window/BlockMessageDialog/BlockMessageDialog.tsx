import {FC} from 'react';
import MessageArrivedItem from './MessageArrivedItem/MessageArrivedItem'
import MessageSendItem from "./MessageSendItem/MessageSendItem";
import {IMessage} from "@features/chats/store/dialog/types";
import {useAuth} from "@providers/AuthProvider";
const BlockMessageDialog: FC<{message:IMessage}> = ({message}) => {
    const {user} = useAuth()
    const consistShowMessage = (user?.id && message.userId) && String(message.userId)  == String(user?.id)
    const consistShowMessageArrived = (user?.id && message.userId) && String(message.userId)  !== String(user?.id)
    return (
        <>
            {consistShowMessageArrived && <MessageArrivedItem message={message} />}
            {consistShowMessage && <MessageSendItem message={message} />}
        </>
    );
}

export default BlockMessageDialog;
import {FC} from 'react';
import styles from './MessageSendItem.module.scss'
import {IMessage} from "@features/chats/store/dialog/types";

const MessageSendItem: FC<{ message: IMessage }> = ({message}) => {
    return (
        <div className={styles.block}>
                <span className={styles.item}>
                    {message.message}
                </span>
        </div>
    );
}

export default MessageSendItem;
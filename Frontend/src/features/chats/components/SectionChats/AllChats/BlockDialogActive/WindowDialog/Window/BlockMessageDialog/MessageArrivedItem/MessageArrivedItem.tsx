import {FC} from 'react';
import styles from './MessageArrivedItem.module.scss'
import {IMessage} from "@features/chats/store/dialog/types";

const MessageArrivedItem: FC<{message:IMessage}> = ({message}) => {
    return (
        <div className={styles.block}>
                <span className={styles.item}>
                    {message.message}
                </span>
        </div>
    );
}

export default MessageArrivedItem;
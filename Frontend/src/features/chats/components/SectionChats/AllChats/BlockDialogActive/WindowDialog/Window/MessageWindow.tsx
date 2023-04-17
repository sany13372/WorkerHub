import {FC, useEffect} from 'react';
import styles from './MessageWindow.module.scss'
import ItemLength from "@components/UI/ItemLength/ItemLength";
import BlockMessageDialog from './BlockMessageDialog/BlockMessageDialog'
import {IMessage} from "@features/chats/store/dialog/types";
import {useTypedSelector} from "@hooks/useTypedSelector";

const MessageWindow: FC<{ messages: IMessage[] }> = ({messages}) => {

    const {dialogActive} = useTypedSelector((store) => store.dialog)

    useEffect(() => {
        const element = document.getElementById('window-dialog')
        if (element) {
            element.scrollTop = element.scrollHeight
        }
    }, [dialogActive])

    return (
        <div className={styles.window} id={'window-dialog'}>
            <ItemLength length={messages?.length || 0} title={'Сообщений нет'}>
                {messages && messages.map((message: IMessage) => <BlockMessageDialog key={message.id}
                                                                                     message={message}/>)}
            </ItemLength>
        </div>
    );
}

export default MessageWindow;
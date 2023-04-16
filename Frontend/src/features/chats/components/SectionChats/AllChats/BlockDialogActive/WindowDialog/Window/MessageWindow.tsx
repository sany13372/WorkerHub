import {FC, useEffect} from 'react';
import styles from './MessageWindow.module.scss'
import {useTypedSelector} from "@hooks/useTypedSelector";
import {DialogService} from "@services/dialog.service";
import {useActions} from "@hooks/useActions";
import ItemLength from "@components/UI/ItemLength/ItemLength";
import BlockMessageDialog from './BlockMessageDialog/BlockMessageDialog'
import {IMessage} from "@features/chats/store/dialog/types";
const MessageWindow: FC<{ messages: IMessage[] }> = ({messages}) => {
    const {dialogActive, refetch} = useTypedSelector((store) => store.dialog)
    const {setRefetch} = useActions()

    return (
        <div className={styles.window}>
            <ItemLength length={messages?.length || 0} title={'Сообщений нет'}>
                {messages && messages.map((message:IMessage) => <BlockMessageDialog key={message.id} message={message}/>)}
            </ItemLength>
        </div>
    );
}

export default MessageWindow;
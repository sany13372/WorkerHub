import {FC, useState} from 'react';
import FieldActions from "./FieldActions/FieldActions";
import styles from './WindowField.module.scss'
import {useSendMessageMutation} from "@features/chats/store/dialog/endpoints";
import {useTypedSelector} from "@hooks/useTypedSelector";
import {useActions} from "@hooks/useActions";
import {useAuth} from "@providers/AuthProvider";
import cn from 'clsx'
import {useThemContext} from "@providers/ThemProvider";

const WindowField: FC = () => {
    const [message, setMessage] = useState<string>('')
    const [sendMessage] = useSendMessageMutation()
    const {dialogActive, refetch} = useTypedSelector((store) => store.dialog)
    const {setRefetch} = useActions()
    const {user} = useAuth()
    const {dark} = useThemContext()
    const sendMessageHandle = async (e?: KeyboardEvent | any, arg?: string) => {

        const messageDto = {
            dialogId: String(dialogActive?.id),
            message: message,
            userId: String(user?.id),
            authIdUser: String(user?.id)
        }
        if (message) {
            if (e?.key === 'Enter') {
                sendMessage(messageDto)
                setRefetch(!refetch)
                setMessage('')
            } else if (arg === 'true') {
                sendMessage(messageDto)
                setRefetch(!refetch)
                setMessage('')
            }
        }
    }

    return (
        <div className={styles.window}>
            <div className={cn({
                [styles.dark]: dark
            })}>
                <input type="text" value={message} onKeyDownCapture={(e) => sendMessageHandle(e)}
                       onChange={(e) => setMessage(e.target.value)}/>
                <FieldActions sendMessage={() => sendMessageHandle(null, 'true')}/>
            </div>
        </div>
    );
}

export default WindowField;
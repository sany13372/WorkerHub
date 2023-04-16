import {FC, useState} from 'react';
import FieldActions from "./FieldActions/FieldActions";
import styles from './WindowField.module.scss'
import {useGetDialogsQuery, useSendMessageMutation} from "@features/chats/store/dialog/endpoints";
import {useTypedSelector} from "@hooks/useTypedSelector";
import {useActions} from "@hooks/useActions";
import {useAuth} from "@providers/AuthProvider";

const WindowField: FC = () => {
    const [message, setMessage] = useState<string>('')
    const [sendMessage] = useSendMessageMutation()
    const {dialogActive,refetch} = useTypedSelector((store) => store.dialog)
    const {setRefetch} = useActions()
    const {user} = useAuth()
    const sendMessageHandle = async () => {
        const messageDto = {dialogId:String(dialogActive?.id),message:message,userId:String(user?.id) }
        sendMessage(messageDto)
        setRefetch(!refetch)
        setMessage('')
    }

    return (
        <div className={styles.window}>
            <div>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <FieldActions sendMessage={() => sendMessageHandle()}/>
            </div>
        </div>
    );
}

export default WindowField;
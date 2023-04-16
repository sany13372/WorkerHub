import {FC, useEffect} from 'react';
import styles from './AllChats.module.scss'
import BlockMessages from "./BlockMessages/BlockMessages";
import {useGetDialogsQuery} from "@features/chats/store/dialog/endpoints";
import {useTypedSelector} from "@hooks/useTypedSelector";
import {useActions} from "@hooks/useActions";
import {IDialog} from "@features/chats/store/dialog/types";
import BlockDialogActive from './BlockDialogActive/BlockDialogActive'

const AllChats: FC = () => {
    const {refetch, dialogs, dialog, dialogActive} = useTypedSelector((store) => store.dialog)
    const {data, isLoading, refetch: refetchData} = useGetDialogsQuery()
    const {setDialogs, setDialogActive} = useActions()
    useEffect(() => {
        setDialogs(data || [])
        refetchData()
    }, [data, isLoading, refetch])

    useEffect(() => {
        const findDialog = dialogs?.find((item: IDialog) => String(item.id) === dialog)
        setDialogActive(findDialog || null)
    }, [dialogs, dialog])

    return (
        <div className={styles.wrapper}>
            <BlockMessages isLoading={isLoading} data={data || []} dialogs={dialogs || []}/>
            {dialogActive && <BlockDialogActive/>}
        </div>
    );
}

export default AllChats;
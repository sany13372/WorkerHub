import {FC, useEffect} from 'react';
import styles from './DropDownMessagesItem.module.scss'
import {IDialog} from "@features/chats/store/dialog/types";
import cn from 'clsx'
import {cutString} from "@utils/cutString";
import {useActions} from "@hooks/useActions";
import {dateFormatting} from "@utils/formatedData";
import {DialogService} from "@services/dialog.service";
import {useTypedSelector} from "@hooks/useTypedSelector";

const DropDownMessagesItem: FC<{ item: IDialog, isShow: boolean }> = ({item, isShow}) => {
    const message = item.messages[item.messages.length - 1] || ''
    const {refetch} = useTypedSelector((store) => store.dialog)
    const {setDialog, setRefetch} = useActions()
    const handleDialogActive = async () => {
        setDialog(String(item?.id))
        await DialogService.checkMessage(item.id)
        setRefetch(!refetch)
    }

    return (
        <div
            onClick={() => handleDialogActive()}
            className={cn(styles.item, {
                [styles.active]: isShow
            })}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <img src={item?.user?.avatar} alt="Аватар"/>
                </div>
                <div className={styles.titles}>
                    <h4>{item?.user?.firstname}</h4>
                    <div>{item?.user?.phone}</div>
                </div>
                <div className={styles.dataTitle}>{dateFormatting(item?.updatedAt)}</div>
            </div>
            <h4 className={styles.message}>{message.message && cutString(message?.message, 12)}</h4>
        </div>
    );
}

export default DropDownMessagesItem;
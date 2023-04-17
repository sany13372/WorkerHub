import {FC, memo, useState} from 'react';
import styles from './DropDownMessages.module.scss'
import cn from 'clsx'
import DropDownMessagesItem from "./DropDownMessagesBlock/DropDownMessagesItem/DropDownMessagesItem";
import {IDialog} from "@features/chats/store/dialog/types";
import {RiArrowUpSLine} from 'react-icons/ri'
import {useAuth} from "@providers/AuthProvider";
import DropDownMessagesBlock
    from "@features/chats/components/SectionChats/AllChats/BlockMessages/DropDownMessages/DropDownMessagesBlock/DropDownMessagesBlock";

interface IDropDownMessages {
    title: string
    dialogs: IDialog[]
    typeItem: boolean
    lastMessage?: boolean
}

const DropDownMessages: FC<IDropDownMessages> = ({dialogs, title, typeItem, lastMessage}) => {

    const [isShow, setIsShow] = useState<boolean>(false)

    return (
        <div>
            <div className={styles.line} onClick={() => setIsShow(!isShow)}>
                <h4>{title}</h4>
                <RiArrowUpSLine
                    className={cn({[styles.active]: isShow})}
                    size={20}
                    color={'gray'}/>
            </div>
            {dialogs.map((item: IDialog) => <DropDownMessagesBlock typeItem={typeItem} isShow={isShow} item={item}
                                                                   key={item.id}/>)}
        </div>
    );
}

export default memo(DropDownMessages);
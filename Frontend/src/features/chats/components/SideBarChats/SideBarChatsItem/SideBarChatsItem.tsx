import {Dispatch, FC, SetStateAction} from 'react';
import styles from './SideBarChatsItem.module.scss'
import {IChatsElement} from "types/all.inetrface";
import cn from 'clsx'

interface ISideBarChatsItem {
    item: IChatsElement
    setType: Dispatch<SetStateAction<string>>
    type: string
}

const SideBarChatsItem: FC<ISideBarChatsItem> = ({item, setType, type}) => {
    return (
        <div
            onClick={() => setType(item.title)}
            className={cn(styles.item, {
                [styles.active]: item.title === type
            })}>
            {item.icon}
            <h4>{item.title}</h4>
        </div>
    );
}

export default SideBarChatsItem;
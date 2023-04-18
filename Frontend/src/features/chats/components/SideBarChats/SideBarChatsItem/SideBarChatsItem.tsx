import {Dispatch, FC, SetStateAction} from 'react';
import styles from './SideBarChatsItem.module.scss'
import {IChatsElement} from "types/all.inetrface";
import cn from 'clsx'
import {useTranslation} from "react-i18next";

interface ISideBarChatsItem {
    item: IChatsElement
    setType: Dispatch<SetStateAction<string>>
    type: string
}

const SideBarChatsItem: FC<ISideBarChatsItem> = ({item, setType, type}) => {
    const {t} = useTranslation()
    return (
        <div
            onClick={() => setType(item.type)}
            className={cn(styles.item, {
                [styles.active]: item.type === type
            })}>
            {item.icon}
            <h4>{t(item.title)}</h4>
        </div>
    );
}

export default SideBarChatsItem;
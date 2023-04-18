import {Dispatch, FC, SetStateAction, useMemo} from 'react';
import {IChatsElement} from "types/all.inetrface";
import {BsFillBookmarkFill, BsFillEnvelopeCheckFill} from 'react-icons/bs'
import {TiMessages} from 'react-icons/ti'
import {BiBlock, BiTrash} from 'react-icons/bi'
import {SiLivechat} from 'react-icons/si'
import SideBarChatsItem from "./SideBarChatsItem/SideBarChatsItem";
import styles from './SideBarChats.module.scss'
import cn from 'clsx'
import {useThemContext} from "@providers/ThemProvider";

interface ISideBarChats {
    type: string
    setType: Dispatch<SetStateAction<string>>
}

const SideBarChats: FC<ISideBarChats> = ({setType, type}) => {

    const {dark} = useThemContext()
    const sideBar: IChatsElement[] = useMemo(() => (
        [
            {
                title: 'chats.attached',
                icon: <BsFillEnvelopeCheckFill size={20}/>,
                counts: null,
                type:'Прикрипленные'
            },
            {
                title: 'chats.all',
                icon: <TiMessages size={20}/>,
                counts: null,
                type:'Все'
            },
            {
                title: 'chats.livechat',
                icon: <SiLivechat size={20}/>,
                counts: null,
                type:'Живой чат'
            },
            {
                title: 'chats.archive',
                icon: <BsFillBookmarkFill size={20}/>,
                counts: null,
                type:'Архив'
            },
            {
                title: 'chats.blocked',
                icon: <BiBlock size={20}/>,
                counts: null,
                type:'Заблокированно'
            },
            {
                title: 'chats.trash',
                icon: <BiTrash size={20}/>,
                counts: null,
                type:'Мусор'
            },
        ]
    ), [type])

    return (
        <nav className={cn(styles.sideBar,{
            [styles.dark]:dark
        })}>
            {sideBar.map((item: IChatsElement) => <SideBarChatsItem key={item.title} setType={setType} type={type}
                                                                    item={item}/>)}
        </nav>
    );
}

export default SideBarChats;
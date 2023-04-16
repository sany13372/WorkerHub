import {FC} from 'react';
import styles from './BlockNavigate.module.scss'

import {IBlockNavigateElement} from "types/all.inetrface";
import {RiFilePaperLine} from 'react-icons/ri';
import {IoMdContact} from 'react-icons/io'
import {GiProgression} from 'react-icons/gi'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import BlockNavigateElement from "./BlockNavigateElement/BlockNavigateElement";

const BlockNavigate: FC = () => {
    const blocks:IBlockNavigateElement[] = [
        {
            title:'Резюме',
            navigate:'/resume',
            icon:<RiFilePaperLine size={20} color={'gray'}/>
        },
        {
            title:'Контакты',
            navigate:'/contacts',
            icon:<IoMdContact size={20}/>
        },
        {
            title:'Статистика',
            navigate:'/statistic',
            icon:<GiProgression size={20}/>
        },
        {
            title:'Чаты',
            navigate:'/chats',
            icon:<BsFillChatSquareTextFill size={20}/>
        },
        {
            title:'Настройки',
            navigate:'/settings',
            icon:<AiFillSetting size={20}/>
        },
    ]
    return (
        <nav className={styles.block}>
            {blocks.map((item:IBlockNavigateElement) => <BlockNavigateElement key={item.title} item={item}/>)}
        </nav>
    );
}

export default BlockNavigate;
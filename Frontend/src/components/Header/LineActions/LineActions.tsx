import {FC} from 'react';
import styles from './LineActions.module.scss'

import SwitcherThem from "./SwitcherThem/SwitcherThem";
import {IoMdCall} from 'react-icons/io'
import {MdOutlineNotifications, MdLanguage} from 'react-icons/md'
import {useTranslation} from "react-i18next";

const LineActions: FC = () => {

    const {i18n} = useTranslation()

    return (
        <div className={styles.line}>
            <SwitcherThem/>
            <IoMdCall size={20} cursor={'pointer'}/>
            <MdOutlineNotifications size={20} cursor={'pointer'}/>
            <MdLanguage size={20} onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
                        cursor={'pointer'}/>
        </div>
    );
}

export default LineActions;
import {FC} from 'react';
import styles from './Header.module.scss'
import {IDialog} from "@features/chats/store/dialog/types";
import {BsFillFileEarmarkCheckFill, BsFillPhoneFill} from 'react-icons/bs'
import cn from 'clsx'
import {useThemContext} from "@providers/ThemProvider";
import {useTranslation} from "react-i18next";

const Header: FC<{ dialog: IDialog | null }> = ({dialog}) => {
    const {dark} = useThemContext()
    const {t} = useTranslation()
    return (
        <div className={cn(styles.header, {
            [styles.dark]: dark
        })}>
            <div>
                <div className={styles.img}>
                    <img src={dialog?.user?.avatar} alt="Картинка"/>
                </div>
                <div className={styles.title}>{t('chats.dialogon')}</div>
                <h4 className={cn(styles.titleName, {
                    [styles.dark]: dark
                })}>{dialog?.user?.firstname}</h4>
            </div>
            <div className={styles.icons}>
                <button
                    className={cn(styles.button, {
                        [styles.dark]: dark
                    })}>
                    {t('chats.accept')}
                </button>
                <BsFillFileEarmarkCheckFill cursor={'pointer'} color={'gray'} size={20}/>
                <BsFillPhoneFill cursor={'pointer'} color={'gray'} size={20}/>
            </div>
        </div>
    );
}

export default Header;
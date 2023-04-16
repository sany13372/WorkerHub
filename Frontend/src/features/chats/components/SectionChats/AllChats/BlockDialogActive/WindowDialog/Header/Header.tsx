import {FC} from 'react';
import styles from './Header.module.scss'
import {IDialog} from "@features/chats/store/dialog/types";
import {BsFillFileEarmarkCheckFill, BsFillPhoneFill} from 'react-icons/bs'

const Header: FC<{ dialog: IDialog | null }> = ({dialog}) => {
    return (
        <div className={styles.header}>
            <div className={styles.img}>
                <img src={dialog?.user?.avatar} alt="Картинка"/>
            </div>
            <div className={styles.title}>Разговор с</div>
            <h4>{dialog?.user?.firstname}</h4>
            <button className={styles.button}>
                Принять предложение
            </button>
            <div className={styles.icons}>
                <BsFillFileEarmarkCheckFill cursor={'pointer'} size={20}/>
                <BsFillPhoneFill cursor={'pointer'} size={20}/>
            </div>
        </div>
    );
}

export default Header;
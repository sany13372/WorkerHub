import {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "@hooks/useTypedSelector";
import styles from './UserInfo.module.scss'
import {IDialog} from "@features/chats/store/dialog/types";

const dialogInfo: FC = () => {
    const {dialogActive} = useTypedSelector((store) => store.dialog)

    return (
        <div className={styles.info}>
            <div className={styles.image}>
                <img src={dialogActive?.user?.avatar} alt="Картинка"/>
            </div>
            <div className={styles.titles}>
                <h4>{dialogActive?.user?.firstname}</h4>
                <div>{dialogActive?.user?.phone}</div>
            </div>
        </div>
    );
}

export default dialogInfo;
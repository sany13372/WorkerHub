import {FC} from 'react';
import styles from './BlockNavigateElement.module.scss'
import cn from 'clsx'
import {IBlockNavigateElement} from "types/all.inetrface";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


const BlockNavigateElement: FC<{ item: IBlockNavigateElement }> = ({item}) => {

    const {t} = useTranslation()
    const nav = useNavigate()
    const location = useLocation()

    return (
        <div
            className={cn(styles.item, {
                [styles.active]: item.navigate === location.pathname
            })}
            onClick={() => nav(item.navigate)}
        >
            {item.icon}
            <h5>{t(item.title)}</h5>
        </div>
    );
}

export default BlockNavigateElement;
import {FC} from 'react';
import styles from './ActionItem.module.scss'
const ActionItem: FC<{icon:any}> = ({icon}) => {
    return (
        <div className={styles.item}>
            {icon}
        </div>
    );
}

export default ActionItem;
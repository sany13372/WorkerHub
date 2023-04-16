import {FC} from 'react';
import styles from './Action.module.scss'

const Action: FC<{icon:any}> = ({icon}) => {
    return (
        <div className={styles.action}>
            {icon}
        </div>
    );
}

export default Action;
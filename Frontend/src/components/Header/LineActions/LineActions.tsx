import {FC} from 'react';
import styles from './LineActions.module.scss'

import SwitcherThem from "./SwitcherThem/SwitcherThem";
import {IoMdCall} from 'react-icons/io'
import {MdOutlineNotifications} from 'react-icons/md'

const LineActions: FC = () => {
    return (
        <div className={styles.line}>
            <SwitcherThem/>
            <IoMdCall size={20}  cursor={'pointer'}/>
            <MdOutlineNotifications size={20} cursor={'pointer'} />
        </div>
    );
}

export default LineActions;
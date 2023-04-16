import {FC} from 'react';
import styles from './RightSideBar.module.scss'
import BlockResume from "./BlockResume/BlockResume";

const RightSideBar: FC = () => {
    return (
        <div className={styles.sideBar}>
            <BlockResume/>
        </div>
    );
}

export default RightSideBar;
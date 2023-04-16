import {FC} from 'react';
import styles from './BlockResume.module.scss'
import UserInfo from "./UserInfo/UserInfo";
import ActionsLine from './ActionsLine/ActionsLine'
import UserSkills from './UserSkills/UserSkills'
const BlockResume: FC = () => {
    return (
        <div className={styles.block}>
            <UserInfo/>
            <ActionsLine/>
            <UserSkills/>
        </div>
    );
}

export default BlockResume;
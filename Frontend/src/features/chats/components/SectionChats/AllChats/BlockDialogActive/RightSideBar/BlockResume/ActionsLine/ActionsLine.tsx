import {FC} from 'react';
import styles from './ActionsLine.module.scss'
import ActionItem from "./ActionItem/ActionItem";
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineVideoCamera} from 'react-icons/ai'
import {BiVolumeMute} from 'react-icons/bi'

const ActionsLine: FC = () => {
    return (
        <div className={styles.line}>
            <ActionItem icon={<BiPhoneCall/>}/>
            <ActionItem icon={<AiOutlineVideoCamera/>}/>
            <ActionItem icon={<BiVolumeMute/>}/>
        </div>
    );
}

export default ActionsLine;
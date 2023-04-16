import {FC} from 'react';
import Chats from "../../features/chats";
import styles from './Chats.module.scss'

const ChatsPage: FC = () => {
    return (
        <main className={styles.wrapper}>
            <Chats/>
        </main>
    );
}

export default ChatsPage;
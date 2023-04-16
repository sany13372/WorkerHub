import {FC} from 'react';
import styles from './SectionChats.module.scss'
import AllChats from "./AllChats/AllChats";

const SectionChats: FC<{ type: string }> = ({type}) => {
    return (
        <section className={styles.section}>
            {type === 'Все' && <AllChats />}
        </section>
    );
}

export default SectionChats;
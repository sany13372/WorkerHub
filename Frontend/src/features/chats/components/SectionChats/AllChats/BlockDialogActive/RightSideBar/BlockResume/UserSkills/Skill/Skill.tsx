import {FC} from 'react';
import {getRandomColor} from "@utils/getRandomColor";
import styles from './Skill.module.scss'

const Skill: FC<{skill:string}> = ({skill}) => {
    return (
        <div className={styles.skill} style={{backgroundColor:getRandomColor()}}>
            {skill}
        </div>
    );
}

export default Skill;
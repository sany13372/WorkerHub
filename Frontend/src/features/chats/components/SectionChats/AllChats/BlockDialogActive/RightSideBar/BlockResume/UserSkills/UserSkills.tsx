import {FC} from 'react';
import {useTypedSelector} from "@hooks/useTypedSelector";
import Skill from './Skill/Skill'
import styles from './UserSkills.module.scss'

const UserSkills: FC = () => {
    const {dialogActive} = useTypedSelector((store) => store.dialog)
    return (
        <div className={styles.skills}>
            {dialogActive?.user?.skills && dialogActive?.user?.skills.map((skill: string) => <Skill key={skill} skill={skill}/>)}
        </div>
    );
}

export default UserSkills;
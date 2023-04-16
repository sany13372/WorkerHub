import {FC} from 'react';
import styles from './SwitcherThem.module.scss'
import {useThemContext} from "@providers/ThemProvider";

const SwitcherThem: FC = () => {
    const {dark,setDark} = useThemContext()
    return (
            <div className={styles.switcher} >
                <label className={styles.label} >
                    <input className={styles.input} type='checkbox'/>
                    <span className={styles.slider} onClick={() => setDark(!dark)}></span>
                </label>
            </div>
    );
}

export default SwitcherThem;
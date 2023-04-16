import {FC} from 'react';
import styles from './Logo.module.scss'
import Humans from '@assets/images/Humans.svg'
import {useNavigate} from "react-router-dom";

const Logo: FC = () => {
    const nav = useNavigate()

    return (
        <div className={styles.logo}>
            <img src={Humans} alt="Лого"/>
            <h3 onClick={() => nav('/')}>Worker</h3>
        </div>
    );
}

export default Logo;
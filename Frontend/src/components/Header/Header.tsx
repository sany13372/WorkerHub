import {FC} from 'react';
import styles from './Header.module.scss'
import Logo from "./Logo/Logo";
import BlockNavigate from "./BlockNavigate/BlockNavigate";
import LineActions from "./LineActions/LineActions";
import UserAvatar from "./UserAvatar/UserAvatar";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div>
                <Logo/>
                <BlockNavigate/>
            </div>
            <div>
                <LineActions/>
                <UserAvatar/>
            </div>
        </header>
    );
}

export default Header;
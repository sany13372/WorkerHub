import {FC} from 'react';
import styles from './UserAvatar.module.scss'
import {useAuth} from "@providers/AuthProvider";
import cn from 'clsx'
import {useThemContext} from "@providers/ThemProvider";
const UserAvatar: FC = () => {
    const {user,logout} = useAuth()
    const {dark} = useThemContext()
    return (
        <div className={styles.block}>
            <div>
                <h3 className={cn(styles.titleName,{
                    [styles.dark]:dark
                })}>{user?.firstname}</h3>
                <h6>{user?.phone}</h6>
            </div>
            <div className={styles.img}>
                <img
                    src="https://cdn.dribbble.com/users/282315/avatars/normal/eb25944e6b75cbbc28b1998dc537b2f9.png?1602659147"
                    alt="Картинка"/>
            </div>
            <div onClick={() => logout()}>Exit</div>
        </div>
    );
}

export default UserAvatar;
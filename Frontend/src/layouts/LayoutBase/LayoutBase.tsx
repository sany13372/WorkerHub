import {FC, useEffect} from 'react';
import cn from "clsx";
import styles from "@layouts/MainLayout.module.scss";
import Header from "@components/Header/Header";
import {Outlet, useNavigate} from "react-router-dom";
import {useThemContext} from "@providers/ThemProvider";

const LayoutBase: FC = () => {
    const nav = useNavigate()
    const user = localStorage.getItem('user')
    const {dark} = useThemContext()
        useEffect(() => {
            if (!user) {
                nav('/auth')
            }
        }, [location.pathname])
    return (
        <>
            <div
                className={cn(styles.layout,{
                    [styles.dark]:dark
                }) }
            >
                {user && location.pathname !== '/auth' && <Header/>}
                <Outlet/>
            </div>
        </>
    );
}

export default LayoutBase;
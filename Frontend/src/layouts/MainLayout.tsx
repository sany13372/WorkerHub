import {FC, PropsWithChildren, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import styles from './MainLayout.module.scss'
import Header from "../components/Header/Header";
import ThemProvider from "../providers/ThemProvider";
import MainProvider from "@providers/MainProvider";

interface IMainLayout extends PropsWithChildren {
}

const MainLayout: FC<IMainLayout> = ({children}) => {
    const nav = useNavigate()
    const user = localStorage.getItem('user')

    useEffect(() => {
        if (!user){
            nav('/auth')
        }
    },[location.pathname])

    return (
        <>
            <MainProvider>
                <div className={styles.layout}>
                    {user && location.pathname !=='/auth' && <Header/>}
                    <Outlet/>
                </div>
            </MainProvider>
        </>
    );
}

export default MainLayout;
import {FC, PropsWithChildren} from 'react';
import MainProvider from "@providers/MainProvider";
import LayoutBase from "@layouts/LayoutBase/LayoutBase";

interface IMainLayout extends PropsWithChildren {
}

const MainLayout: FC<IMainLayout> = ({children}) => {

    return (
        <>
            <MainProvider>
                <LayoutBase/>
            </MainProvider>
        </>
    );
}

export default MainLayout;
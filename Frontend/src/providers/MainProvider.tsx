import {FC, PropsWithChildren} from 'react';
import AuthProvider from "@providers/AuthProvider";
import ThemProvider from "@providers/ThemProvider";

const MainProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <AuthProvider>
                <ThemProvider>
                    {children}
                </ThemProvider>
            </AuthProvider>
        </>
    );
}

export default MainProvider;
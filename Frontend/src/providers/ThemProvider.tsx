import {createContext, FC, PropsWithChildren, useContext, useMemo, useState} from "react";

export interface IThemContext{
    dark:boolean
    setDark:(dark:boolean) => void
}

export const ThemContext = createContext<IThemContext>({} as IThemContext)

type IThemProvider = PropsWithChildren
const ThemProvider: FC<IThemProvider> = ({children}) => {
    const [dark,setDark] = useState(false)
    const values = useMemo(()=> ({dark,setDark}),[dark])
    return (
        <ThemContext.Provider value={values}>
            {children}
        </ThemContext.Provider>
    );
};

export default ThemProvider;

export const useThemContext = () => useContext(ThemContext)
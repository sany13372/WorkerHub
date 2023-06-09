import Cookies from 'js-cookie'
import {createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {useCheckAuthMutation} from "@context/user/user.actions";
import {removeTokensStorage} from "@utils/authHelper";
import {IUser} from "@context/user/user.types";

export interface IAuthContext {
    logout: () => void
    user: IUser | undefined
    setUser: (user: IUser | undefined) => void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<IUser | undefined>(undefined)
    const {pathname} = useLocation()
    const [checkAuth] = useCheckAuthMutation()
    const nav = useNavigate()

    const logout = () => {
        removeTokensStorage()
        localStorage.removeItem('user')
        nav('/auth')
    }

    useEffect(() => {
        const readyUser = localStorage.getItem('user')
        const accessToken = Cookies.get('accessToken')
        const refreshToken = Cookies.get('refreshToken')
        setUser(readyUser ?JSON.parse(readyUser)  : undefined)
        if (accessToken) checkAuth({refreshToken})
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')

        if (!refreshToken && user) logout()
    }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    const values = useMemo(() => ({user, setUser, logout}), [user, logout])
    // return !isOnlyAdmin && !isOnlyUser ? (
    //     <>{children}</>
    // ) : (
    //     <DynamicCheckRole Component={{isOnlyAdmin, isOnlyUser}}>
    //         {children}
    //     </DynamicCheckRole>
    // )

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)
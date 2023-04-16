
export interface IUser{
    id: number,
    createdAt: string,
    updatedAt: string,
    email: string,
    avatar:string
    password: string,
    firstname: string |null,
    lastname: string |null,
    phone: string | null,
    skills: string[] | []
}
export interface IUserState {
    email: string
    isAdmin: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IUserInitialState {
    user: IUserState | null
    isLoading: boolean
}

export interface IInterfaceEmailPassword {
    email: string
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IUser & {
        isAdmin: boolean
    }
}
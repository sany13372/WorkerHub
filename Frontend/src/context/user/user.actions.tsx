
import {api} from "@context/api/api";
import {IInterfaceEmailPassword, IUser} from "@context/user/user.types";

export const userApi = api.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation<IUser,IInterfaceEmailPassword>({
            query: (data) => ({
                body: data,
                url: '/auth/register',
                method: 'POST',
                invalidatesTags:() => [{
                    type:'User'
                }]
            })
        }),
        login: builder.mutation<IUser,IInterfaceEmailPassword>({
            query: (data) => ({
                body: data,
                url: '/auth/login',
                method: 'POST',
                invalidatesTags:() => [{
                    type:'User'
                }]
            })
        }),
        checkAuth: builder.mutation<IUser,any>({
            query: (data) => ({
                body: data,
                url: '/auth/login/access-token',
                method: 'POST',
                invalidatesTags:() => [{
                    type:'User'
                }]
            })
        }),

    })
})

export const {useCheckAuthMutation,useLoginMutation,useRegisterMutation} = userApi
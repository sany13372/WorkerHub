import { createSlice } from '@reduxjs/toolkit'
import { getStoreLocal } from '@utils/getStoreLocal'
import { IUserInitialState } from './user.types'

const initialState: IUserInitialState = {
    user: getStoreLocal('user'),
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    })


export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
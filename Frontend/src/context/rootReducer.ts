import {dialogReducer} from '@features/chats/store/dialog/dialog.slice'
import {combineReducers} from "redux";
import {api} from "@context/api/api";


export const reducers = combineReducers({
    dialog: dialogReducer,
    [api.reducerPath]:api.reducer
})

import { createSlice } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";


export interface User {
    uid: string,
    nome: string,
    email: string,
    senha: string,
    profileImg: ImageSourcePropType,
}

interface UserStore {
    userData? : User,
    login: boolean,
}

const initialState : UserStore = {
    userData : undefined,
    login : false,
}

export const userSlice = createSlice({
    name: 'UserReducer',
    initialState,
    reducers: {
        setUser(state, action){
            const user = action.payload;
            return {...state, userData : user, login : true}
        },
        removeUser(state, action){
            return {...state, userData : undefined, login: false}
        }
    }
})

export const {removeUser, setUser} = userSlice.actions
export const SelectUser = (state : any) => state.user.user;
export default userSlice.reducer;
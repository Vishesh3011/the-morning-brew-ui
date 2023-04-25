import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import firebase from 'firebase/compat/app';
import { getLocalStorage, setLocalStorage } from "../util/LocalStorage";

const request = axios.create({
    baseURL: "",
})

const requestREST = axios.create({
    baseURL: "https://localhost:5001/api/v1/users",
})

export const registerUser = createAsyncThunk("register", async (values) => {
    const { email, password } = values;
    try {
        const responseAuth = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const responseAuthUser = responseAuth.user;
        // const valuesWithUserId = { ...values, userId: responseAuthUser.uid };
        // const user = await requestREST.post("/", valuesWithUserId)
        // console.log(user);
        return responseAuthUser;
    } catch (err) {
        console.log(err)
    }
})

export const loginUser = createAsyncThunk("login", async (values) => {
    const { email, password } = values;
    try {
        const responseAuth = await firebase.auth().signInWithEmailAndPassword(email, password)
        const responseAuthUser = responseAuth.user;
        // const user = await requestREST.get(`/${responseAuthUser.uid}`);
        // console.log(user);
        return responseAuthUser;
    } catch (err) {
        console.log(err)
    }
})

const initialState = {
    isLoading: false,
    user: getLocalStorage("user") ?? null,
    isError: false,
    token: "",
    msg: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        logout: (state, action) => {
            state.token = null;
            state.user = null;
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, { payload: { error, msg } }) => {
            state.isLoading = false;
            if (error) {
                state.error = error
            } else {
                state.msg = msg
            }
        })
        builder.addCase(registerUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })

        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            if (state.error) {
                state.error = action.payload;
            }
            else {
                console.log(action.payload.multiFactor.user)
                // state.msg = action.payload
                state.user = action.payload.multiFactor.user
                state.token = action.payload
                // console.log(action.payload)
                // localStorage.setItem("msg", action.payload)
                setLocalStorage("user", action.payload.multiFactor.user)
                // localStorage.setItem("token", action.payload)
            }
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export const { addToken, addUser, logout } = userSlice.actions;

export const UserDataById = (state) => (id) => state.user.users.find((user) => user.id === Number(id));

export default userSlice.reducer
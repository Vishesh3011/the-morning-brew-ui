import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import firebase from "firebase/compat/app";
import { getLocalStorage, setLocalStorage } from "../util/LocalStorage";
import Swal from "sweetalert2";

import "./userSlice.css"

const request = axios.create({
  baseURL: "",
});

const requestClient = axios.create({
  baseURL: "http://localhost:9001/user",
});

export const registerUser = createAsyncThunk("register", async (values) => {
  const { email, username, password } = values;
  try {
    const responseAuth = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const responseAuthUser = responseAuth.user.multiFactor.user;
    // console.log(responseAuthUser)
    const valuesToBePassed = {
      userId: responseAuthUser.uid,
      email: email,
      userName: username,
    };
    console.log(valuesToBePassed);
    const user = await requestClient.post("", valuesToBePassed);
    console.log(user);
    return user.data;
  } catch (err) {
    console.log(err);
  }
});

export const loginUser = createAsyncThunk("login", async (values) => {
  const { email, password } = values;
  try {
    const responseAuth = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const responseAuthUser = responseAuth.user;
    const user = await requestClient.get(`/${responseAuthUser.uid}`);
    if (user.data) {
      window.location.href = "/";
      setLocalStorage("user", user.data);
      // swal("Welcome back!", "Login successful.", "success");
      Swal.fire({
        title: 'Login successful!',
        icon: 'success',
        text: `Welcome ${user.data.userName}!`,
        customClass: {
          popup: 'swal2-popup-custom',
          title: 'swal2-title-custom',
          content: 'swal2-content-custom',
          confirmButton: 'swal2-confirm-button-custom',
          cancelButton: 'swal2-cancel-button-custom'
        }
      });

      return user.data;
    }
  } catch (err) {
    Swal.fire({
      title: 'Error! Cannot login',
      icon: 'error',
      text: 'Invalid credentials or something went wrong. Please try again.',
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        content: 'swal2-content-custom',
        confirmButton: 'swal2-confirm-button-custom',
        cancelButton: 'swal2-cancel-button-custom'
      }
    });

    console.log("login error", err);
  }
});

const initialState = {
  isLoading: false,
  user: getLocalStorage("user") ?? null,
  isError: false,
  token: "",
  msg: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.error) {
        state.error = action.payload;
      } else {
        state.msg = action.payload;
      }
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.error) {
        state.error = action.payload;
      } else {
        state.user = action.payload;
        state.token = action.payload;
      }
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { addToken, addUser, logout } = userSlice.actions;

export default userSlice.reducer;

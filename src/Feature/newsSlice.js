import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const request = axios.create({
    baseURL: "https://gnews.io/api/v4",
})

const requestServer = axios.create({
    baseURL: "http://localhost:9001/news",
})

export const getInterestedNews = createAsyncThunk("getInterestedNews", async (userId) => {
    const response = await requestServer.get(`interests/${userId}`);
    console.log("ddddddddddd", response.data)
    return response.data;
})

const initialState = {
    isLoading: false,
    isError: false,
    news: [],
    msg: ""
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getInterestedNews.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getInterestedNews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.news = action.payload;
        })
        builder.addCase(getInterestedNews.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export const NewsData = (state) => state.news;

export default newsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const request = axios.create({
    baseURL: "https://gnews.io/api/v4",
})

const requestClient = axios.create({
    baseURL: "http://localhost:9001/news",
})

const API_KEY = '48924be1219213b8362f34cf1792b951';

export const getNewsByCategory = createAsyncThunk("getNewsByCategory", async (params) => {
    const { type, q, category, lang, country, max } = params;
    const query = {};

    if (category) {
        query.category = category;
    }

    if (q) {
        query.q = q;
    }

    query.lang = "en";

    if (country) {
        query.country = country;
    }

    if (max) {
        query.max = 50;
    }

    console.log(query)
    const response = await request.get(type, { params: { ...query, q, apikey: API_KEY } });
    const categorizedArticles = response.data.articles.map((article) => ({
        ...article,
        category,
      }));
    console.log("*********", categorizedArticles)
    // const responseClient = await requestClient.post("", categorizedArticles);
    // const responseClient = await requestClient.post("", {articles:response.data.articles , category: query.category});
    // const response = await axios.get("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=1&apikey=48924be1219213b8362f34cf1792b951");
    // console.log("*********" , response.data.articles);
    return response.data.articles;
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
        builder.addCase(getNewsByCategory.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getNewsByCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.news = action.payload;
        })
        builder.addCase(getNewsByCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            // state.msg = action.payload.errors;
        })
    }
})

export const NewsData = (state) => state.news;

export default newsSlice.reducer;
import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:9001/news'
})

export const fetchAllNews = async () => {
    const response = await request.get(``)
    console.log(response)
    return response.data;
}

export const fetchNewsByCategory = async (category) => {
    console.log(category)
    const response = await request.get(`category/${category}`)
    console.log("ddddddddd", response)
    return response.data;
}

export const fetchNewsBySearch = async (query) => {
    const response = await request.get(`search/${query}`)
    console.log(response)
    return response.data;
}

export const fetchNewsByID = async (newsId) => {
    const response = await request.get(`/${newsId}`)
    console.log(response)
    return response.data;
}
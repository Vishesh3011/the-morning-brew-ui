import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:9001/user'
})

export const fetchSavedNews = async (userId) => {
    const response = await request.get(`${userId}/news/saved`)
    console.log(response)
    return response.data;
}

export const saveNews = async (userId, newsId) => {
    const response = await request.put(`${userId}/news/${newsId}/save`)
    console.log(response)
    return response.data;
}

export const unSaveNews = async (userId, newsId) => {
    const response = await request.delete(`${userId}/news/${newsId}/unsave`)
    console.log(response)
    return response.data;
}
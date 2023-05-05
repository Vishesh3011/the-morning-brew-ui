import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:9001/saveNews'
})

export const fetchSavedNews = async (userId) => {
    const response = await request.get(`${userId}`)
    console.log(response)
    return response.data;
}

export const saveNews = async (userId, newsId) => {
    const response = await request.post(`${userId}/news/${newsId}`)
    console.log(response)
    return response.data;
}
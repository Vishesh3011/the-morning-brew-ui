import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:9001/userInterestedNews/user'
})

export const fetchInterestedNews = async (userId) => {
    const response = await request.get(`${userId}`)
    console.log(response)
    return response.data;
}
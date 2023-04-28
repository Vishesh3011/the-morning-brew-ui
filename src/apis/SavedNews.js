import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:3001',
})

export const saveNewsToUser = async (userId, news) => {
    const response = await request.post(`/${userID}/savedNews`, news);
    return response;
}
import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:9001/user'
})

export const addInterests = async (userId, interest) => {
    const response = await request.put(`${userId}/interests`, {interest})
    console.log(response)
    return response.data
}

export const fetchInterests = async (userId) => {
    const response = await request.get(`${userId}/interests`)
    console.log(response)
    return response.data
}

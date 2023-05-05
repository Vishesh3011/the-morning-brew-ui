import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:9001/interests'
})

export const addInterests = async (userId, interest) => {
    const response = await request.post(`${userId}`, {interest})
    console.log(response)
    return response.data
}


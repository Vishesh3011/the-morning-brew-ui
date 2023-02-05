import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2'
    // baseURL: 'https://the-morning-brew.web.app/newsapi.org/v2'
    // https://the-morning-brew.web.app/
});

export default instance;
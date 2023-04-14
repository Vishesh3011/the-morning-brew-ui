import axios from "axios";

const API_KEY = '850b86e310114be7bbf646f638d81fa9';

const request = axios.create({
    baseURL: 'https://newsapi.org/v2',
})

// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=850b86e310114be7bbf646f638d81fa9
// https://newsapi.org/v2/?type=top-headlines&country=in&category=business&apiKey=850b86e310114be7bbf646f638d81fa9

export const getNewsByCategory = async (params) => {
    const { type, category, country, q } = params;
    const query = {};

    if (country) {
        query.country = country;
    }

    if (category) {
        query.category = category;
    }

    if (q) {
        query.q = q;
    }
    
    console.log(query)
    const response = await request.get(type, { params: { ...query, apiKey: API_KEY } });
    return response;
};





import axios from "axios";

const API_KEY = '48924be1219213b8362f34cf1792b951';
// 850b86e310114be7bbf646f638d81fa9
// 48924be1219213b8362f34cf1792b951

const request = axios.create({
    baseURL: 'https://gnews.io/api/v4',
})

export const getNewsByCategory = async (params) => {
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

    if(max){
        query.max = 50;
    }

    console.log(query)
    const response = await request.get(type, { params: { ...query, q, apikey: API_KEY } });
    console.log(response.data);
    return response;
};






import axios from "axios";

const API_KEY = '48924be1219213b8362f34cf1792b951';
// 850b86e310114be7bbf646f638d81fa9
// 48924be1219213b8362f34cf1792b951

const request = axios.create({
    baseURL: 'https://gnews.io/api/v4',
})

// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=850b86e310114be7bbf646f638d81fa9
// https://newsapi.org/v2/?type=top-headlines&country=in&category=business&apiKey=850b86e310114be7bbf646f638d81fa9

// https://gnews.io/api/v4/top-headlines?category=general&apikey=48924be1219213b8362f34cf1792b951
// https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=48924be1219213b8362f34cf1792b951
// https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=1&apikey=48924be1219213b8362f34cf1792b951

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






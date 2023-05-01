const axios = require("axios");

const request = axios.create({
    baseURL: "https://gnews.io/api/v4",
})

const API_KEY = '48924be1219213b8362f34cf1792b951';
async function getNews() {

    const response = await axios.get("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=48924be1219213b8362f34cf1792b951");
    console.log(response.data.articles);
}

getNews();
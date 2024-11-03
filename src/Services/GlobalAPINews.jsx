import axios from "axios";

const key = "f2d374e5416d45ec82f5454d25f4d37c";
const axiosNewsInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'User-Agent': 'Mozilla/5.0',
    'Accept': 'application/json'
  }
});


const fetchNews = (query = "games") => 
  axiosNewsInstance.get(`/everything?q=${query}&sortBy=publishedAt&apiKey=${key}`);

export default {
  fetchNews,
};

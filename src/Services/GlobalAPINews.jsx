import axios from "axios";

const key = "f2d374e5416d45ec82f5454d25f4d37c";
const axiosNewsInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
});


const fetchNews = (query = "games") => 
  axiosNewsInstance.get(`/everything?q=${query}&sortBy=publishedAt&apiKey=${key}`);

export default {
  fetchNews,
};

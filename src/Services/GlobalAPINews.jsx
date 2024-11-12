import axios from "axios";

// Substitua pela sua chave de API GNews
const apiKey = "1eae427999e4849ceeac98b3e9a63468";

const axiosNewsInstance = axios.create({
  baseURL: 'https://gnews.io/api/v4',
  headers: {
    'Accept': 'application/json'
  }
});

const fetchNews = (query = "games") =>
  axiosNewsInstance.get(`/search?q=${query}&lang=pt&token=${apiKey}`);  // Adicionamos o lang=pt

export default {
  fetchNews,
};

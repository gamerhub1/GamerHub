import axios from "axios";

const key = "18d8dc115d954615a6fe8522598e8a97";
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api',
});


const getGenreList = axiosCreate.get('/genres?key=' + key);
const getAllGames = axiosCreate.get('/games?key=' + key);
const getGameListByGenreId = (id, page) =>
  axiosCreate.get(`/games?key=${key}&genres=${id}&page=${page}`);
const searchGames = (query) =>
  axiosCreate.get(`/games?key=${key}&search=${query}`);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
  searchGames,
};

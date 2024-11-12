const fetchNews = async (query) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query || "game"}&language=pt&apiKey=f2d374e5416d45ec82f5454d25f4d37c`);
    console.log(response);
    
    if (response.data.articles.length === 0) {
      console.log("Nenhuma notícia encontrada");
    }
    setNews(response.data.articles);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
  }
};

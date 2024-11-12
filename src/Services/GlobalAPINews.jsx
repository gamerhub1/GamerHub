export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY; 
  const query = req.query.q || "games";
  const language = req.query.lang || "pt";
  const sortBy = req.query.sortBy || "publishedAt";

  const url = `https://newsapi.org/v2/everything?q=${query}&language=${language}&sortBy=${sortBy}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Erro ao buscar dados da News API" });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro interno no servidor", details: error.message });
  }
}

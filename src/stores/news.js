const fetchNews = async () => {
  const url = `https://localhost:3003/news`;
  const res = await fetch(url);
  console.log(res.body);
};

export default fetchNews;

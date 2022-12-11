const key = `29ddb03debc65c59447daa8a8240547e`;

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  // requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
};

export default request;
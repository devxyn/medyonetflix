export const key = "514ad4d83eff3188d4f518c6b7570826";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=3`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  genreEndpoint: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
  movieListEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&page=2&with_genres=`,
};

export default requests;

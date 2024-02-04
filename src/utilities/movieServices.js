const key = import.meta.env.VITE_TM_DB_KEY;

const base_url = `https://api.themoviedb.org/3/`;

export const TMDB_API = {
  popular: `${base_url}movie/popular?api_key=${key}&language=en-US&page=1`,
  upComing: `${base_url}movie/upcoming?api_key=${key}&language=en-US&page=2`,
  topRated: `${base_url}movie/top_rated?api_key=${key}&language=en-US&page=3`,
  nowPlaying: `${base_url}movie/now_playing?api_key=${key}&language=en-US&page=4`,
};

export const MOVIE_DETAILS = (id) => {
  return `${base_url}movie/${id}?api_key=${key}&language=en-US`;
};

export const TRAILER = (id) => {
  return `${base_url}movie/${id}/videos?api_key=${key}`;
};

export const TRAILER_PLAY = (key, controls) => {
  return `https://www.youtube.com/embed/${key}${controls}`;
};

export const CREATE_IMG_URL = (size, path) =>
  `https://image.tmdb.org/t/p/${size}${path}`;

export const SEARCH_MOVIE = (query) =>
  `search/movie?query=${query}&api_key=${key}`;

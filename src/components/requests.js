const apiKey = '92c3dfa0581f24de374d6b5704044fcd';
const baseUrl = 'https://api.themoviedb.org/3';
const baseUrlForList = 'https://api.themoviedb.org/4';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const extraData = 'append_to_response=videos,images,credits';
const youtubeApiKey = 'AIzaSyATBXwxXpWj1-mcCQkUR8mtsrM7aNNbHQ8';
let id = '';
let searchedTerm = '';
let imagePath = '';
let youtubeKey = '';

const fetchSimilar = (baseUrl, id, apiKey, type) => {
  return `${baseUrl}/${type}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`;
};

const fetchByNameMovie = (baseUrl, apiKey, searchedTerm) => {
  return `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchedTerm}`;
};
const fetchByNameTv = (baseUrl, apiKey, searchedTerm) => {
  return `${baseUrl}/search/tv?api_key=${apiKey}&query=${searchedTerm}`;
};

const fetchByGenreMovies = (baseUrl, apiKey, id) => {
  return `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&page=1`;
};

const fetchByGenreShows = (baseUrl, apiKey, id) => {
  return `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=${id}&page=1`;
};

const fetchKidsRandom = pageNo => {
  return `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=${pageNo}`;
};

const movieRequest = {
  fetchTrending: `${baseUrl}/trending/movie/week?api_key=${apiKey}`,
  fetchUpcoming: `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  fetchNowPlaying: `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
  fetchPopular: `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  fetchPopular2: `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  fetchMovie: `${baseUrl}/movie/${id}?api_key=${apiKey}`,
  fetchByName: `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchedTerm}`,
  fetchImage: `${imageBaseUrl}/${imagePath}`,
  playYouTube: `https://www.youtube.com/watch?v=${youtubeKey}`,
  fetchLists: {
    marvelListPage1: `${baseUrlForList}/list/1?page=1&api_key=${apiKey}`,
    marvelListPage2: `${baseUrlForList}/list/1?page=2&api_key=${apiKey}`,
    marvelListPage3: `${baseUrlForList}/list/1?page=3&api_key=${apiKey}`,
    avengersCharactersMovie: `${baseUrlForList}/list/5?page=3&api_key=${apiKey}`,
    fetchByGenre: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}&page=1`,
  },
  fetchCollections: `https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&language=en-US&query=Fast+and+Furious&page=1`,
  fetchFastAndFuriousCollection: `https://api.themoviedb.org/3/collection/9485?api_key=92c3dfa0581f24de374d6b5704044fcd&language=en-US`,
};

const showRequests = {
  fetchShow: `${baseUrl}/show/${id}?api_key=${apiKey}`,
  playYouTube: `https://www.youtube.com/watch?v=${youtubeKey}`,
  fetchTrending: `${baseUrl}/trending/tv/week?api_key=${apiKey}`,
  fetchLatest: `${baseUrl}/tv/latest?api_key=${apiKey}&language=en-US`,
  fetchAiringToday: `${baseUrl}/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`,
  fetchOnTheAir: `${baseUrl}/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
  fetchPopular: `${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  fetchTopRated: `${baseUrl}/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  fetchSimilar: `${baseUrl}/tv/${id}/similar?api_key=${apiKey}&language=en-US&page=1`,
  fetchRecommendations: `${baseUrl}/tv/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`,
  fetchByGenre: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=${id}&page=1`,
  fetchKids1: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=1`,
  fetchKids2: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=2`,
  fetchKids3: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=3`,
  fetchKids4: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=4`,
  fetchKids5: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=5`,
  fetchKids6: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=6`,
  fetchKids7: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=7`,
  fetchKids8: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=8`,
  fetchKids9: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=9`,
  fetchKids10: `${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=10762&page=10`,
};

const movieGenreData = [
  {title: 'Action', id: 'Action', movieId: 28, showId: 10759},
  {title: 'Animation', id: 'Animation', movieId: 16, showId: 16},
  {title: 'Adventure', id: 'Adventure', movieId: 12},
  {title: 'Comedy', id: 'Comedy', movieId: 35, showId: 35},
  {title: 'Crime', id: 'Crime', movieId: 80},
  {title: 'Documentary', id: 'Documentary', movieId: 99},
  {title: 'Drama', id: 'Drama', movieId: 18},
  {title: 'Family', id: 'Family', movieId: 10751},
  {title: 'Fantasy', id: 'Fantasy', movieId: 14},
  {title: 'History', id: 'History', movieId: 36},
  {title: 'Horror', id: 'Horror', movieId: 27},
  {title: 'Music', id: 'Music', movieId: 10402},
  {title: 'Mystery', id: 'Mystery', movieId: 9648},
  {title: 'Romance', id: 'Romance', movieId: 10749},
  {title: 'Science Fiction', id: 'Science', movieId: 878, showId: 10765},
  {title: 'TV Movie', id: ' Tv Movie', movieId: 10770},
  {title: 'Thriller', id: 'Thriller', movieId: 53},
  {title: 'War', id: 'War', movieId: 10752},
  {title: 'Western', id: 'Western', movieId: 37},
  {title: 'Kids', id: 'Kids', showId: 10762},
  {title: 'News', id: 'News', showId: 10763},
];

export {
  showRequests,
  movieRequest,
  apiKey,
  baseUrl,
  baseUrlForList,
  imageBaseUrl,
  extraData,
  fetchSimilar,
  fetchByNameMovie,
  fetchByNameTv,
  movieGenreData,
  fetchByGenreMovies,
  fetchByGenreShows,
  fetchKidsRandom,
  youtubeApiKey,
};

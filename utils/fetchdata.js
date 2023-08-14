
const fetchdata = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=421f75865e2bcbd47dc05c68bfb668ab&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=421f75865e2bcbd47dc05c68bfb668ab&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=421f75865e2bcbd47dc05c68bfb668ab&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=421f75865e2bcbd47dc05c68bfb668ab&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=421f75865e2bcbd47dc05c68bfb668ab&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=421f75865e2bcbd47dc05c68bfb668ab&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=421f75865e2bcbd47dc05c68bfb668ab&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=421f75865e2bcbd47dc05c68bfb668ab&with_genres=99`,
    fetchPopularTv: 'https://api.themoviedb.org/3/tv/popular?api_key=421f75865e2bcbd47dc05c68bfb668ab&language=en-US',
    fetchTopRatedTv: 'https://api.themoviedb.org/3/tv/top_rated?api_key=421f75865e2bcbd47dc05c68bfb668ab&language=en-US'
};

export default fetchdata;

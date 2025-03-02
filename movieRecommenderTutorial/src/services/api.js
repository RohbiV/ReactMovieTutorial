const API_KEY = "9598e7d145fcf476f8a8c86cad615829";
const BASE_URL = "https://api.themoviedb.org/3";



// writing function for doing 2 operation i.e displaying popular movies and searching for them

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = await response.json();
    return data.results;
};


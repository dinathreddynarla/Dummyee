// Replace 'your_api_key_here' with your actual TMDB API key for the following requests

// 1. Fetch Popular Movies
async function getPopularMovies() {
    // Endpoint to fetch popular movies
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Popular Movies:', data.results);  // Logs the results of popular movies
}

// 2. Fetch Top-Rated Movies
async function getTopRatedMovies() {
    // Endpoint to fetch top-rated movies
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Top-Rated Movies:', data.results);  // Logs the results of top-rated movies
}

// 3. Fetch Upcoming Movies
async function getUpcomingMovies() {
    // Endpoint to fetch upcoming movies
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Upcoming Movies:', data.results);  // Logs the results of upcoming movies
}

// 4. Search Movies by Query
async function searchMovies(query) {
    // Endpoint to search movies by name
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=your_api_key_here&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    const data = await response.json();
    console.log('Search Results:', data.results);  // Logs search results based on the query
}

// 5. Fetch Movie Details by Movie ID
async function getMovieDetails(movieId) {
    // Endpoint to fetch details of a specific movie by its ID
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=your_api_key_here&language=en-US`);
    const data = await response.json();
    console.log('Movie Details:', data);  // Logs the detailed information of the movie
}

// 6. Fetch Trending Movies or TV Shows
async function getTrending(mediaType = 'movie', timeWindow = 'day') {
    // Endpoint to fetch trending media (movies or TV shows)
    const response = await fetch(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=your_api_key_here`);
    const data = await response.json();
    console.log(`Trending ${mediaType}:`, data.results);  // Logs the trending media based on the type (movie or tv) and time window
}

// 7. Fetch Now Playing Movies
async function getNowPlayingMovies() {
    // Endpoint to fetch movies currently playing in theaters
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Now Playing Movies:', data.results);  // Logs movies that are currently playing
}

// 8. Fetch TV Show Details by TV ID
async function getTVShowDetails(tvId) {
    // Endpoint to fetch details of a specific TV show by its ID
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=your_api_key_here&language=en-US`);
    const data = await response.json();
    console.log('TV Show Details:', data);  // Logs detailed information of the TV show
}

// 9. Fetch Person Details (Actor/Crew)
async function getPersonDetails(personId) {
    // Endpoint to fetch details about a specific person (actor or crew)
    const response = await fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=your_api_key_here&language=en-US`);
    const data = await response.json();
    console.log('Person Details:', data);  // Logs detailed information of the person (actor/crew member)
}

// Call these functions to test the API requests
// Example calls:
getPopularMovies();           // Fetches and logs popular movies
getTopRatedMovies();         // Fetches and logs top-rated movies
getUpcomingMovies();         // Fetches and logs upcoming movies
searchMovies('Inception');   // Searches and logs results for "Inception"
getMovieDetails(550);        // Fetches details for the movie "Fight Club" (ID: 550)
getTrending('movie', 'week'); // Fetches and logs trending movies for the past week
getNowPlayingMovies();       // Fetches and logs movies currently playing in theaters
getTVShowDetails(1399);      // Fetches details for the TV show "Game of Thrones" (ID: 1399)
getPersonDetails(500);       // Fetches details for the person with ID 500 (Tom Cruise)

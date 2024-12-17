// Replace 'your_api_key_here' with your actual TMDB API key for the following requests

// 1. Fetch Popular Movies and Extract Movie IDs
async function getPopularMovies() {
    // Endpoint to fetch popular movies
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Popular Movies:', data.results);
    // Extract and log movie IDs
    data.results.forEach(movie => console.log('Movie ID:', movie.id));
  }
  
  // 2. Fetch Top-Rated Movies and Extract Movie IDs
  async function getTopRatedMovies() {
    // Endpoint to fetch top-rated movies
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Top-Rated Movies:', data.results);
    // Extract and log movie IDs
    data.results.forEach(movie => console.log('Movie ID:', movie.id));
  }
  
  // 3. Fetch Upcoming Movies and Extract Movie IDs
  async function getUpcomingMovies() {
    // Endpoint to fetch upcoming movies
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Upcoming Movies:', data.results);
    // Extract and log movie IDs
    data.results.forEach(movie => console.log('Movie ID:', movie.id));
  }
  
  // 4. Search Movies by Query and Extract Movie IDs
  async function searchMovies(query) {
    // Endpoint to search movies by name
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=your_api_key_here&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    const data = await response.json();
    console.log('Search Results:', data.results);
    // Extract and log movie IDs
    data.results.forEach(movie => console.log('Movie ID:', movie.id));
  }
  
  // 5. Fetch Movie Details by Movie ID
  async function getMovieDetails(movieId) {
    // Endpoint to fetch details of a specific movie by its ID
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=your_api_key_here&language=en-US`);
    const data = await response.json();
    console.log('Movie Details:', data);  // Logs the detailed information of the movie
  }
  
  // 6. Fetch TV Show IDs by Searching TV Shows
  async function searchTVShows(query) {
    // Endpoint to search TV shows by name
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=your_api_key_here&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    const data = await response.json();
    console.log('TV Show Search Results:', data.results);
    // Extract and log TV show IDs
    data.results.forEach(tv => console.log('TV Show ID:', tv.id));
  }
  
  // 7. Fetch TV Show Details by TV ID
  async function getTVShowDetails(tvId) {
    // Endpoint to fetch details of a specific TV show by its ID
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=your_api_key_here&language=en-US`);
    const data = await response.json();
    console.log('TV Show Details:', data);  // Logs the detailed information of the TV show
  }
  
  // 8. Fetch Person IDs by Searching People (Actors/Directors)
  async function searchPerson(query) {
    // Endpoint to search for people by name
    const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=your_api_key_here&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    const data = await response.json();
    console.log('Person Search Results:', data.results);
    // Extract and log person IDs
    data.results.forEach(person => console.log('Person ID:', person.id));
  }
  
  // 9. Fetch Person Details by Person ID
  async function getPersonDetails(personId) {
    // Endpoint to fetch details about a person (actor, crew member, etc.)
    const response = await fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=your_api_key_here&language=en-US`);
    const data = await response.json();
    console.log('Person Details:', data);  // Logs detailed information of the person
  }
  
  // 10. Fetch Trending Movies or TV Shows and Extract IDs
  async function getTrending(mediaType = 'movie', timeWindow = 'day') {
    // Endpoint to fetch trending movies or TV shows
    const response = await fetch(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=your_api_key_here`);
    const data = await response.json();
    console.log(`Trending ${mediaType}:`, data.results);
    // Extract and log media IDs
    data.results.forEach(item => console.log(`${mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} ID:`, item.id));
  }
  
  // 11. Fetch Now Playing Movies and Extract Movie IDs
  async function getNowPlayingMovies() {
    // Endpoint to fetch movies currently playing in theaters
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=your_api_key_here&language=en-US&page=1');
    const data = await response.json();
    console.log('Now Playing Movies:', data.results);
    // Extract and log movie IDs
    data.results.forEach(movie => console.log('Movie ID:', movie.id));
  }
  
  // Call the functions to fetch and log IDs
  getPopularMovies();           // Fetches popular movies and logs their IDs
  getTopRatedMovies();         // Fetches top-rated movies and logs their IDs
  getUpcomingMovies();         // Fetches upcoming movies and logs their IDs
  searchMovies('Inception');   // Searches for "Inception" and logs its ID
  getMovieDetails(550);        // Fetches details for the movie "Fight Club" (ID: 550)
  searchTVShows('Game of Thrones'); // Searches for "Game of Thrones" and logs its TV show ID
  getTVShowDetails(1399);      // Fetches details for "Game of Thrones" (ID: 1399)
  searchPerson('Tom Cruise');  // Searches for "Tom Cruise" and logs their ID
  getPersonDetails(500);       // Fetches details for "Tom Cruise" (ID: 500)
  getTrending('movie', 'week'); // Fetches trending movies for the past week and logs their IDs
  getNowPlayingMovies();       // Fetches movies currently playing and logs their IDs
  
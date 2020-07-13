const api = {
  callApi: async function() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    return await response.json();
  },

  getMovies: async function() {
    let movies = []; 
    await this.callApi().then(ghiblimovies => {
      if (ghiblimovies.length > 0) {
        movies = ghiblimovies.slice(0, 11);

        movies.forEach(movie => {
          movie.image = movie.id + '.jpg';
          movie.cost = 1;
        });
      }
    });
    return movies;
  }
}

export default api;
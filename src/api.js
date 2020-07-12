const api = {
  getMovies: async function() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    return await response.json();
  }
}

export default api;
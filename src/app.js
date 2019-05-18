const StudioGhibli = require('./models/studio_ghibli.js')
const FilmListView = require('./views/film_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const filmListElement = document.querySelector('#studio-ghibli');
  const filmListView = new FilmListView(filmListElement);
  filmListView.bindEvents();


  const studioGhibli = new StudioGhibli;
  studioGhibli.getData();
});

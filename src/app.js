const StudioGhibli = require('./models/studio_ghibli.js')
const NumberOfFilmsView = require('./views/number_of_films_view.js')
const FilmListView = require('./views/film_list_view.js')
const SortView = require('./views/sort_view.js')
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#director-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const sortElement = document.querySelector('#sort-toggle')
  const sortView = new SortView(sortElement);
  sortView.bindEvents();

  const numberOfFilmsElement = document.querySelector('#number-of-films');
  const numberOfFilms = new NumberOfFilmsView(numberOfFilmsElement);
  numberOfFilms.bindEvents();

  const filmListElement = document.querySelector('#studio-ghibli');
  const filmListView = new FilmListView(filmListElement);
  filmListView.bindEvents();

  const studioGhibli = new StudioGhibli;
  studioGhibli.bindEvents();
  studioGhibli.getData();
});

const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const StudioGhibli = function () {
  this.filmData = [];
};

StudioGhibli.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
      .then((data) => {
        this.filmData = data
        PubSub.publish('Studio_ghibli:data-ready', this.filmData);
      });
};

StudioGhibli.prototype.handleDataReady = function (films) {
  const filmTitles = this.getFilmTitles(films);
  return this.modelFilms(filmTitles)
};

StudioGhibli.prototype.getFilmTitles = function (films) {
  return films.map(film => film.title)
}

StudioGhibli.prototype.modelFilms = function (filmTitles) {
  this.films = filmTitles.map((filmTitle) => {
    return {
      title: filmTitle
    }
  });
}

module.exports = StudioGhibli;

const PubSub = require('../helpers/pub_sub.js');
// const FilmView = require('./film_view.js');


const FilmListView = function (element) {
  this.element = element;
}

FilmListView.prototype.bindEvents = function () {
  PubSub.subscribe('Studio_ghibli:data-ready', (event) => {
    this.films = event.detail;
    this.render();
  });
};

FilmListView.prototype.render = function () {

};


module.exports = FilmListView;

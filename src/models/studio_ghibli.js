const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const StudioGhibli = function () {
  this.filmData = [];
};

StudioGhibli.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt)  => {
    const directorIndex = evt.detail;
    this.publishFilmsByDirector(directorIndex);
  })

  PubSub.subscribe('SortToggle:change', (evt) => {
    if (evt.detail === 'on') {
      this.publishfilmsSortedByScore();
    }
    else {
      const url = 'https://ghibliapi.herokuapp.com/films';
        const requestHelper = new RequestHelper(url);
        requestHelper.get()
          .then((data) => {
            this.filmData = data;
            PubSub.publish('Studio_ghibli:data-ready', this.filmData)
          })
        }
      })
};

StudioGhibli.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
      .then((data) => {
        this.filmData = data
        PubSub.publish('Studio_ghibli:data-ready', this.filmData);
        this.sortByScore(data);
        this.publishDirectors(data);
      });
};

StudioGhibli.prototype.publishDirectors = function (data) {
  this.filmData = data;
  this.directors = this.uniqueDirectorList();
  PubSub.publish('Studio_ghibli:directors-ready', this.directors);
}

StudioGhibli.prototype.uniqueDirectorList = function () {
  return this.directorList().filter((director, index, array) => {
    return array.indexOf(director) === index;
  });
}

StudioGhibli.prototype.directorList = function () {
  const directorList = this.filmData.map(film => film.director);
  return directorList;
}

StudioGhibli.prototype.publishFilmsByDirector = function (directorIndex) {
  const filmsByDirector = this.filmsByDirector(directorIndex);
  PubSub.publish('Studio_ghibli:data-ready', filmsByDirector);
};

StudioGhibli.prototype.filmsByDirector = function (directorIndex) {
  const selectedDirector = this.directors[directorIndex];
    return this.filmData.filter((film) => {
      return film.director === selectedDirector;
    });
};

StudioGhibli.prototype.publishfilmsSortedByScore = function () {
  const filmsSortedByScore = this.sortByScore();
  PubSub.publish('Studio_ghibli:data-ready', filmsSortedByScore);
};

StudioGhibli.prototype.sortByScore = function () {
  const filmsSortedByScore = this.filmData.sort(function(film1, film2) {
    return film2.rt_score - film1.rt_score;
  });
  return filmsSortedByScore;
};



module.exports = StudioGhibli;

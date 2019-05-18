const PubSub = require('../helpers/pub_sub.js')

const NumberOfFilms = function (element) {
  this.element = element
  this.filmData = [];
}

NumberOfFilms.prototype.bindEvents = function () {
  PubSub.subscribe('Studio_ghibli:data-ready', (event) => {
    this.clearNumber();
    this.filmData = event.detail;
    this.render();
  });
};

NumberOfFilms.prototype.clearNumber = function () {
  this.element.innerHTML = '';
};

NumberOfFilms.prototype.render = function () {
  const numberElement = document.createElement('h4');
  if (this.filmData.length > 1) {
    numberElement.textContent = `${this.filmData.length} FILMS`
  }
  else {
    numberElement.textContent = `${this.filmData.length} FILM`
  }
  this.element.appendChild(numberElement)
};

NumberOfFilms.prototype.render

module.exports = NumberOfFilms;

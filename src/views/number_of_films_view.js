const PubSub = require('../helpers/pub_sub.js')

const NumberOfFilmsView = function (element) {
  this.element = element
  this.filmData = [];
}

NumberOfFilmsView.prototype.bindEvents = function () {
  PubSub.subscribe('Studio_ghibli:data-ready', (event) => {
    this.clearNumber();
    this.filmData = event.detail;
    this.render();
  });
};

NumberOfFilmsView.prototype.clearNumber = function () {
  this.element.innerHTML = '';
};

NumberOfFilmsView.prototype.render = function () {
  const numberElement = document.createElement('h4');
  if (this.filmData.length > 1) {
    numberElement.textContent = `${this.filmData.length} FILMS`
  }
  else {
    numberElement.textContent = `${this.filmData.length} FILM`
  }
  this.element.appendChild(numberElement)
};

module.exports = NumberOfFilmsView;

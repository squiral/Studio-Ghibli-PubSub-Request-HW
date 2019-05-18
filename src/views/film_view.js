const FilmView = function (element, film) {
  this.filmListViewElement = element;
  this.film = film;
}

FilmView.prototype.createFilmDetailViewElement = function () {
  const filmDetailViewElement = document.createElement('div');
  filmDetailViewElement.classList.add('film');


  const filmHeadingElement = this.createFilmHeading();
  filmDetailViewElement.appendChild(filmHeadingElement);

  const filmSummaryParagraph = this.createFilmSummaryParagraph();
  filmDetailViewElement.appendChild(filmSummaryParagraph);

  return filmDetailViewElement

};

FilmView.prototype.createFilmHeading = function () {
  const filmHeader = document.createElement('h2');
  filmHeader.classList.add('film-name');
  filmHeader.textContent = this.film.title
  return filmHeader;
}

FilmView.prototype.createFilmSummaryParagraph = function () {
  const filmSummary = document.createElement('p');
  filmSummary.textContent = this.film.description
  return filmSummary;
}

module.exports = FilmView;

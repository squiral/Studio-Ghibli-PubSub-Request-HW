const FilmView = function (element, film) {
  this.filmListViewElement = element;
  this.film = film;
}

FilmView.prototype.createFilmDetailViewElement = function () {
  const filmDetailViewElement = document.createElement('div');
  filmDetailViewElement.classList.add('film');

  const filmHeaderDiv = this.createHeaderDiv();
  filmDetailViewElement.appendChild(filmHeaderDiv)

  const filmHeadingElement = this.createFilmHeading();
  filmHeaderDiv.appendChild(filmHeadingElement);

  const releaseDate = this.createReleaseDateElement();
  filmHeaderDiv.appendChild(releaseDate);

  const filmDirectorElement = this.createFilmDirectorElement();
  filmDetailViewElement.appendChild(filmDirectorElement);

  const hrElement = this.createHrElement();
  filmDetailViewElement.appendChild(hrElement);

  const filmSummaryParagraph = this.createFilmSummaryParagraph();
  filmDetailViewElement.appendChild(filmSummaryParagraph);

  return filmDetailViewElement

};

FilmView.prototype.createHeaderDiv = function () {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('film-header-div');
  return headerDiv;
};

FilmView.prototype.createFilmHeading = function () {
  const filmHeader = document.createElement('h3');
  filmHeader.classList.add('film-name');
  filmHeader.textContent = this.film.title
  return filmHeader;
}

FilmView.prototype.createFilmDirectorElement = function () {
  const directorElement = document.createElement('h4');
  directorElement.classList.add('director');
  directorElement.textContent = this.film.director
  return directorElement;
};

FilmView.prototype.createHrElement = function () {
  const hrElement = document.createElement('hr');
  return hrElement;
}

FilmView.prototype.createReleaseDateElement = function () {
  const releaseDate = document.createElement('h4');
  releaseDate.classList.add('release-date');
  releaseDate.textContent = this.film.release_date;
  return releaseDate;
}

FilmView.prototype.createFilmSummaryParagraph = function () {
  const filmSummary = document.createElement('p');
  filmSummary.textContent = this.film.description
  return filmSummary;
}

module.exports = FilmView;

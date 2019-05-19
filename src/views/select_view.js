const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Studio_ghibli:directors-ready', (evt) => {
    this.populateSelect(evt.detail);
  });

  PubSub.subscribe('SortToggle:change', (evt) => {
    console.log(this.selectElement)
    this.selectElement.selectedIndex = 0;
  })

  this.selectElement.addEventListener('change', (evt) => {
    this.selectedDirectorIndex = evt.target.value
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });

};

SelectView.prototype.populateSelect = function (directors) {
  directors.forEach((director, index) => {
    const option = this.createDirectorOption(director, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createDirectorOption = function (director, index) {
  const option = document.createElement('option');
  option.textContent = director;
  option.value = index;
  return option;
};




module.exports = SelectView;

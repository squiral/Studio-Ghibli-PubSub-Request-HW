const PubSub = require('../helpers/pub_sub');

const SortView = function (sortButton) {
  this.sortButton = sortButton;
};

SortView.prototype.bindEvents = function () {
  PubSub.subscribe('Studio_ghibli:data-ready', (evt) => {
  });







module.exports = SortView;

const PubSub = require('../helpers/pub_sub');

const SortView = function (sortToggle) {
  this.sortToggle = sortToggle;
};

SortView.prototype.bindEvents = function () {
  this.sortToggle.addEventListener('change', (evt) => {
    if (this.sortToggle.checked) {
      toggleMode = 'on'
    }
    else {
      toggleMode = 'off'
    }
    PubSub.publish('SortToggle:change', toggleMode);
  });
};


module.exports = SortView;

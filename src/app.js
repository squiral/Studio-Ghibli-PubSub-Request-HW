const StudioGhibli = require('./models/studio_ghibli.js')

document.addEventListener('DOMContentLoaded', () => {
  const studioGhibli = new StudioGhibli;
  studioGhibli.getData();
});

import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="nav-bar"></div>
  <div id="main"></div>`;

  renderToDom('#app', domString);
};

export default domBuilder;

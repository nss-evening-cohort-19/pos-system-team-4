import renderToDom from '../helpers/renderToDom';

const landingPage = () => {
  const domString = `
  <div class="landing-div">
  <h1>Welcome!<h1>
  <div class="landing-buttons">
  <button type="button" class="btn btn-success btn-lg" id="landing-view-orders">View Orders</button>
  <button type="button" class="btn btn-info btn-lg" id="landing-create-order">Create Order</button>
  <button type="button" class="btn btn-warning btn-lg" id="landing-view-revenue">View Revenue</button>
  </div>
  </div>`;

  renderToDom('#main', domString);
};

export default landingPage;

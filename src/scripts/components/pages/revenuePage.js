import renderToDom from '../../helpers/renderToDom';

const revenuePage = (obj) => {

  const domString = `
  <div>
    <h1 class="display-3">Revenue</h1>
    <h2 class="display-2">Total Revenue: $</h2>
    <div class="card text-center">
  <div class="card-header">
    Date Range
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">Total Tips</p>
    <p class="card-text">Total Call In Orders</p>
    <p class="card-text">Total Walk In Orders</p>
  </div>
  <div>
    <h5 class="card-title">Payment Types</h5>
    <p class="card-text">Cash - </p>
    <p class="card-text">Credit - </p>
    <p class="card-text">Mobile - </p>
  </div>
</div>
  </div>
  `
}
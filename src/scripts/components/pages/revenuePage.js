import renderToDom from '../../helpers/renderToDom';

const revenuePage = (revenueArray) => {
  let totalRevenue = 0;
  let totalTips = 0;
  let numberOfCallIn = 0;
  let numberOfWalkIn = 0;
  let numberOfCash = 0;
  let numberOfCredit = 0;
  let numberOfDebit = 0;
  revenueArray.forEach((item) => {
    totalRevenue += parseInt(item.total, 10);
    totalTips += parseInt(item.tip, 10);
    if (item.callInOrder) {
      numberOfCallIn += 1;
    } else {
      numberOfWalkIn += 1;
    }
    switch (item.paymentID) {
      case '-N4jEihZtPg-vEscur_X':
        numberOfCredit += 1;
        break;
      case '-N4jF4FuetrfQh41yJGj':
        numberOfCash += 1;
        break;
      case '-N4jFAFTCgSAeU_30EdL':
        numberOfDebit += 1;
        break;
      default:
        // do something
    }
  });
  const domString = `
  <div>
    <h1 class="display-3">Revenue</h1>
    <h2 class="display-2">Total Revenue: $${totalRevenue}</h2>
    <div class="card text-center">
  <div class="card-body">
    <p class="card-text">Total Tips: $${totalTips}</p>
    <p class="card-text">Total Call In Orders: ${numberOfCallIn}</p>
    <p class="card-text">Total Walk In Orders ${numberOfWalkIn}</p>
  
    <h5 class="card-title">Payment Types</h5>
    <p class="card-text">Cash - ${numberOfCash}</p>
    <p class="card-text">Credit - ${numberOfCredit}</p>
    <p class="card-text">Debit - ${numberOfDebit}</p>
</div>
</div>
  </div>
  `;
  renderToDom('#main', domString);
};

export default revenuePage;

import renderToDOM from '../helpers/renderToDom';

const showOrders = (array) => {
  let domString = '<div id="viewOrdersDiv">';
  array.forEach((orders) => {
    domString += `
    <div class="card" id="viewOrders" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${orders.orderName}</h5>
    <hr><p class="card-text">${orders.isClosed === true ? 'Closed' : 'Open'}</p></hr>
    <hr><p class="card-text">${orders.phone}</p></hr>
    <hr><p class="card-text">${orders.email}</p></hr>
    <hr><p class="card-text">${orders.callInOrder === true ? 'Call In Order' : 'Walk In Order'}</p></hr>
    </div>
    <div class="card-footer">
    <a href="#" class="card-link" id="orderDetails--${orders.firebaseKey}">Details</a>
    <a href="#" class="link-warning">Edit</a>
    <div class="link-danger">${orders.isClosed === false ? `<a href="#" id="delete-order-btn--${orders.firebaseKey}" class="link-danger">Delete</a>` : ''}</div>
    </div>
</div>`;
  });
  domString += '</div>';
  renderToDOM('#main', domString);
};

const emptyOrders = () => {
  document.querySelector('#main').innerHTML = '<h1>No Orders</h1>';
};

export {
  showOrders,
  emptyOrders,
};

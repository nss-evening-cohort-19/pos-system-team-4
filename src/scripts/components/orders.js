import renderToDOM from '../helpers/renderToDom';

const showOrders = (array) => {
  let domString = '';
  array.forEach((orders) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${orders.orderName}</h5>
    <hr><p class="card-text">${orders.isClosed}</p></hr>
    <hr><p class="card-text">${orders.phone}</p></hr>
    <hr><p class="card-text">${orders.email}</p></hr>
    <hr><p class="card-text">${orders.callInOrder}</p></hr>
    </div>
    <a href="#" class="card-link" id="orderDetails--${orders.firebaseKey}">Details</a>
    <a href="#" class="card-link">Edit</a>
    <div class="card-link">${orders.isClosed === false ? `<a href="#" id="delete--${orders.firebaseKey} class="card-link">Delete</a>` : ''}</div>
</div>`;
  });
  renderToDOM('#main', domString);
};

const emptyOrders = () => {
  document.querySelector('#main').innerHTML = '<h1>No Orders</h1>';
};

export {
  showOrders,
  emptyOrders,
};

import { getOrder } from '../../../api/ordersData';
import renderToDOM from '../../helpers/renderToDom';

const orderDetails = (array, orderFirebaseKey) => {
  const afterAPI = (orderIsOpen) => {
    let domStringItems = '<div id="orderDetailsPageDiv">';
    array.forEach((item) => {
      domStringItems += `
      <div class="mt-5 d-flex flex-wrap">
        <div class="d-flex flex-column">
        ${orderIsOpen ? `<div class="mt-5">
        <i id="update-item-btn--${item.firebaseKey}--${item.orderID}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-item-btn--${item.firebaseKey}--${item.orderID}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>` : ''}
        </div>
        <div class="text-white ms-5 details">
         <p>${item.name}</p>
         <hr>
         <p>Description: ${item.description}</p> 
         <hr>
         <p>Price: $${item.price}</p>      
        </div>
      </div>`;
    });
    domStringItems += '</div>';
    if (orderIsOpen === true) {
      domStringItems += `
    <button id="payment-btn--${orderFirebaseKey}" class="btn btn-primary">Payment</button>
    <button id="add-item-btn--${orderFirebaseKey}" class="btn btn-success">Add Item</button>`;
    }
    renderToDOM('#main', domStringItems);
  };
  getOrder(orderFirebaseKey).then((response) => afterAPI(!response.isClosed));
};

export default orderDetails;

import renderToDOM from '../../helpers/renderToDom';

const orderDetails = (array, orderFirebaseKey, orderIsOpen) => {
  // const domString = `
  // <div class="mt-5 d-flex flex-wrap">
  //  <div class="d-flex flex-column">
  //    <div class="mt-5">
  //      <i id="edit-order-btn--${array.firebaseKey}" class="fas fa-edit btn btn-info"></i>
  //      <i id="delete-order--${array.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  //    </div>
  //  </div>
  //  <div class="text-white ms-5 details">
  //    <h2>${array.name} reached at ${array.email} or ${array.phone}</h2>
  //    <h5>The customer's order details: ${array.callInOrder}</h5>
  //   </div>`;
  // renderToDOM('#main', domString);

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

export default orderDetails;

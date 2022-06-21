import renderToDOM from '../../helpers/renderToDom';

const orderDetails = (array) => {
//   const domString = `
//   <div class="mt-5 d-flex flex-wrap">
//    <div class="d-flex flex-column">
//      <div class="mt-5">
//        <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
//        <i id="delete-order--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
//      </div>
//    </div>
//    <div class="text-white ms-5 details">
//      <h2>${obj.name} reached at ${obj.email} or ${obj.phone}</h2>
//      <h5>The customer's order details: ${obj.callInOrder}</h5>
//     </div>`;
//   renderToDOM('#main', domString);

  let domStringItems = '';
  array.forEach((item) => {
    domStringItems += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
       <div class="mt-5">
         <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-item--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
      </div>
      <div class="text-white ms-5 details">
       <p>${item.name}</p>
       <hr>
       <p>PRICE: ${item.price}</p>      
      </div>
    </div>`;
  });
  // domStringItems += `
  // <button id="payment-btn--${item.firebaseKey}" class="btn btn-primary">Payment</button>
  // <button id="add-item-btn--${item.firebaseKey}" class="btn btn-success">Add Item</button>`;

  renderToDOM('#main', domStringItems);
};

export default orderDetails;

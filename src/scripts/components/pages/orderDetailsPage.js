import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const orderDetails = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-order--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h2>${obj.name} reached at ${obj.email} or ${obj.phone}</h2>
     <h5>The customer's order details: ${obj.orderType}</h5>
    </div>`;

  obj.itemObject.forEach((item) => {
    document.querySelector('#view').innerHTML += `
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
    renderToDOM('#orderDetails', domString);
  });
  document.querySelector('#orderDetails').innerHTML += `
    <button id="payment-btn--${obj.firebaseKey}" class="btn btn-primary">Payment</button>
    <button id="add-item-btn--${obj.firebaseKey}" class="btn btn-success">Add Item</button>`;
};

export default orderDetails;

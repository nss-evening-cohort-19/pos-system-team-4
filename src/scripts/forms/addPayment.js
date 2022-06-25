import { getFoodItemsByOrderId } from '../../api/foodItemsData';
import { updateOrder } from '../../api/ordersData';
import renderToDom from '../helpers/renderToDom';
import selectPayment from './selectPayment';

const addPaymentForm = (firebaseKey) => {
  const domstring = `
  <div class="paymentForm">
  <form id="submit-payment--${firebaseKey}" class="mb-4">
    <div class="form-group" id="select-payment">
    </div>
    <div class="form-group">
      <label for="tip">Tip Amount</label>
      <input type="text" class="form-control" id="paymentTip" placeholder="" value="">
    </div>
    <div id="paymentTotal">Your total is $<div id="paymentTotalNumber"></div></div>
    <button type="submit-payment" class="btn btn-primary">Close Order</button>
  </form>
  </div>`;

  renderToDom('#main', domstring);
  selectPayment('select-payment');
  let total = 0;
  getFoodItemsByOrderId(firebaseKey).then((response) => {
    response.forEach((item) => {
      total += item.price;
    });
    console.warn(total);
    renderToDom('#paymentTotalNumber', total);
    const totalObj = { total };
    updateOrder(firebaseKey, totalObj);
  });
};

export default addPaymentForm;

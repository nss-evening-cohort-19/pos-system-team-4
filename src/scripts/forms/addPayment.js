import renderToDom from '../helpers/renderToDom';
import selectPayment from './selectPayment';

const addPaymentForm = () => {
  const domstring = `
  <form id="payment-form" class="mb-4">
    <div class="form-group" id="select-payment">
    </div>
    <div class="form-group">
      <label for="tip">Tip Amount</label>
      <input type="text" class="form-control" id="tip" placeholder="" value="">
    </div>
    <button type="submit" class="btn btn-primary">Close Order</button>
  </form>`;

  renderToDom('#main', domstring);
  selectPayment('select-payment');
};

export default addPaymentForm;

import clearDom from '../helpers/clearDom';
import renderToDom from '../helpers/renderToDom';

const createOrderForm = (order = {}) => {
  clearDom();
  const domString = `
  <div class="createOrderForm">
<form id="${order.firebaseKey ? `update-order--${order.firebaseKey}` : 'submit-order'}">
  <div class="mb-3">
    <label for="orderName" class="form-label">Order Name</label>
    <input type="text" class="form-control" id="orderName">
  <div class="mb-3">
    <label for="phone" class="form-label">Customer Phone</label>
    <input type="text" class="form-control" id="phone">
  </div>
  <div class="mb-3">
  <label for="email" class="form-label">Customer Email</label>
  <input type="text" class="form-control" id="email">
</div>
  <label for="orderType">Order Type</label>
  <select class="form-select" id="orderType">
    <option selected>${order.callInOrder || 'Select An Order Type'}</option>
    <option value="walkIn">Walk In</option>
    <option value="callIn">Call In</option>
  </select>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>`;

  renderToDom('#main', domString);
};

export default createOrderForm;

import clearDom from '../helpers/clearDom';
import renderToDom from '../helpers/renderToDom';

const addItem = (item = {}) => {
  clearDom();
  const domString = `
  <div class="addItemForm">
<form id="${item.firebaseKey ? `update-item--${item.firebaseKey}` : 'submit-item'}">
  <div class="mb-3">
    <label for="itemName" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="itemName">
  <div class="mb-3">
    <label for="itemPrice" class="form-label">Item Price</label>
    <input type="text" class="form-control" id="itemPrice">
  </div>
  <button type="submit" class="btn btn-primary">Add/Edit Item</button>
</form>
</div>`;

  renderToDom('#main', domString);
};

export default addItem;
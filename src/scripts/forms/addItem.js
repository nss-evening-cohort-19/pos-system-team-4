import renderToDom from '../helpers/renderToDom';

const addItem = (orderID, item = {}) => {
  const domString = `
  <div class="addItemForm">
<form id="submit-item">
  <div class="mb-3">
    <label for="itemName" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="itemName" value="${item.name || ''}">
    </div>
    <div class="mb-3">
    <label for="itemDescription" class="form-label">Item Description</label>
    <input type="text" class="form-control" id="itemDescription">
  </div>
  <div class="mb-3">
    <label for="itemPrice" class="form-label">Item Price</label>
    <input type="text" class="form-control" id="itemPrice" value="${item.price || ''}">
  </div>
  <button type="submit" id="${item.firebaseKey ? `edit-item--${item.firebaseKey}` : `submit-item--${orderID}`}" class="btn btn-primary">Add/Edit Item</button>
</form>
</div>`;

  renderToDom('#main', domString);
};

export default addItem;

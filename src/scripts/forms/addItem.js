import renderToDom from '../helpers/renderToDom';

const addItem = (firebaseKey, item = {}) => {
  const domString = `
  <div class="addItemForm">
<form id="${item.firebaseKey ? `update-item--${item.firebaseKey}--${firebaseKey}` : `submit-item--${firebaseKey}`}">
  <div class="mb-3">
    <label for="itemName" class="form-label">Item Name</label>
    <input type="text" class="form-control" id="itemName" value="${item.name || ''}">
    </div>
    <div class="mb-3">
    <label for="itemDescription" class="form-label">Item Description</label>
    <input type="text" class="form-control" id="itemDescription" value="${item.description || ''}">
  </div>
  <div class="mb-3">
    <label for="itemPrice" class="form-label">Item Price</label>
    <input type="text" class="form-control" id="itemPrice" value ="${item.price || ''}">
  </div>
  <button type="submit" class="btn btn-primary">${item.firebaseKey ? 'Update Item' : 'Submit Item'}</button>
</form>
</div>`;

  renderToDom('#main', domString);
};

export default addItem;

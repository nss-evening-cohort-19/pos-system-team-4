import getPayment from '../../api/paymentTypesData';
import renderToDom from '../helpers/renderToDom';

const selectPayment = (paymentId) => {
  let domString = `<label for="payment">Payment Type</label>
    <select class="form-control" id="paymentType" required>
    <option value="">Select a Payment Type</option>`;

  getPayment(paymentId).then((paymentArray) => {
    paymentArray.forEach((payment) => {
      domString += `
           <option 
              value="${payment.firebaseKey}" 
              ${paymentId === payment.firebaseKey ? 'selected' : ''}>${payment.paymentType}
           </option>`;
    });

    domString += '</select>';

    renderToDom('#select-payment', domString);
  });
};

export default selectPayment;

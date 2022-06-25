import { createOrder, updateOrder } from '../../api/ordersData';
import { showOrders } from '../components/orders';
import { createFood, updateFood } from '../../api/foodItemsData';
import orderDetails from '../components/pages/orderDetailsPage';
import landingPage from '../components/landingPage';
import { closeOrder } from '../../api/mergedData';

const formEvents = () => {
  document.querySelector('#main').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const orderObject = {
        callInOrder: (document.querySelector('#orderType').value === 'callIn'),
        dateTime: Date.now(),
        email: document.querySelector('#email').value,
        firebaseKey: '',
        isClosed: false,
        orderName: document.querySelector('#orderName').value,
        paymentID: '',
        phone: document.querySelector('#phone').value,
        tip: 0,
        total: 0,
        uid: ''
      };
      createOrder(orderObject).then((ordersArray) => showOrders(ordersArray));
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        callInOrder: (document.querySelector('#orderType').value === 'callIn'),
        // dateTime: Date.now(),
        email: document.querySelector('#email').value,
        // firebaseKey: '',
        // isClosed: false,
        orderName: document.querySelector('#orderName').value,
        paymentID: '',
        phone: document.querySelector('#phone').value,
        tip: 0,
        total: 0,
        uid: ''
      };
      updateOrder(firebaseKey, orderObject).then((ordersArray) => showOrders(ordersArray));
    }

    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const foodObject = {
        name: document.querySelector('#itemName').value,
        description: document.querySelector('#itemDescription').value,
        price: document.querySelector('#itemPrice').value,
        orderID: `${firebaseKey}`,
        firebaseKey: '',
      };
      createFood(foodObject, firebaseKey).then((foodsArray) => orderDetails(foodsArray, firebaseKey));
    }

    if (e.target.id.includes('update-item')) {
      const [, itemFirebaseKey, orderFirebaseKey] = e.target.id.split('--');
      const foodObject = {
        name: document.querySelector('#itemName').value,
        description: document.querySelector('#itemDescription').value,
        price: document.querySelector('#itemPrice').value,
      };
      console.warn(itemFirebaseKey);
      console.warn(orderFirebaseKey);
      updateFood(foodObject, itemFirebaseKey, orderFirebaseKey).then((foodsArray) => orderDetails(foodsArray, orderFirebaseKey));
    }

    if (e.target.id.includes('submit-payment')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        paymentID: document.querySelector('#paymentType').value,
        tip: document.querySelector('#paymentTip').value,
        isClosed: true
      };
      closeOrder(firebaseKey, orderObject).then(landingPage());
    }
  });
};

export default formEvents;

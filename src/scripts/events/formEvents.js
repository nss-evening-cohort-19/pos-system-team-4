import { createOrder, updateOrder } from '../../api/ordersData';
import { showOrders } from '../components/orders';

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

  //  if (e.target.id.includes('submit-item')) {
    // const foodObject = {
    // name: document.querySelector('#itemName').value,
    // description: document.querySelector('#itemDescription').value,
    // price: document.querySelector('#itemPrice').value,
    // orderId: '',
    //   firebaseKey: '',
    // };
    //  createFood(foodObject).then((foodsArray) => getOrder(foodsArray));
  //  }
  });
};

export default formEvents;

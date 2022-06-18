import { getOrders } from '../../api/ordersData';
import { showOrders } from '../components/orders';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id === 'landing-view-orders') {
      getOrders().then((orderArray) => showOrders(orderArray));
    }
  });
};

export default domEvents;

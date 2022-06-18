import { getOrders } from '../../api/ordersData';
import landingPage from '../components/landingPage';
import { showOrders } from '../components/orders';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id === 'google-auth') {
      signOut();
    }
    if (e.target.id === 'logo') {
      document.querySelector('#main').innerHTML = '';
      landingPage();
    }
    if (e.target.id === 'view-orders') {
      getOrders().then((orderArray) => showOrders(orderArray));
    }
  });
};

export default navigationEvents;

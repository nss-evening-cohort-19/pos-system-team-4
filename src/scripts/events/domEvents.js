// import { getFoodItemsByOrderId } from '../../api/foodItemsData';
import { getOrders } from '../../api/ordersData';
import { showOrders } from '../components/orders';
import { getFoodItemsByOrderId } from '../../api/foodItemsData';
import orderDetails from '../components/pages/orderDetailsPage';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id === 'landing-view-orders') {
      getOrders().then((orderArray) => showOrders(orderArray));
    }
    if (e.target.id.includes('orderDetails')) {
      const [, firebaseKey] = e.target.id.split('--');
      getFoodItemsByOrderId(firebaseKey).then((itemArray) => orderDetails(itemArray));
      // 'showItems' is just a placeholder for whatever you call your function
      // you will need to uncomment this block
      // and uncomment the getFoodItemsByOrderId block
      // and import 'showItems' or whatever you called it
      // the "Chili Party" order card would be the best one to test clicking on
      // because it has enough food items associated with it for you to test
    }
  });
};

export default domEvents;

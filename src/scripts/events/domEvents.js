// import { getFoodItemsByOrderId } from '../../api/foodItemsData';
import deleteOrderItems from '../../api/mergedData';
import { getOrders, getOrder } from '../../api/ordersData';
import { showOrders } from '../components/orders';
import createOrderForm from '../forms/createOrder';
// import createOrder from '../forms/createOrder';
import { getFoodItemsByOrderId, getSingleFoodItem, deleteFood } from '../../api/foodItemsData';
import orderDetails from '../components/pages/orderDetailsPage';
import revenuePage from '../components/pages/revenuePage';
import { getRevenue } from '../../api/revenueData';
import addItem from '../forms/addItem';
import addPaymentForm from '../forms/addPayment';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id === 'landing-view-orders') {
      getOrders().then((orderArray) => showOrders(orderArray));
    }
    if (e.target.id.includes('orderDetails')) {
      const [, firebaseKey] = e.target.id.split('--');
      getFoodItemsByOrderId(firebaseKey).then((itemArray) => orderDetails(itemArray, firebaseKey));
    }
    if (e.target.id.includes('create-order')) {
      createOrderForm();
    }
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete??')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrderItems(firebaseKey).then(showOrders);
      }
    }

    // CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleFoodItem(firebaseKey).then((item) => addItem(item.orderID, item));
    }

    // CLICK EVENT FOR DELETING AN ITEM
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete Item from Order?')) {
        const [, orderFirebaseKey, uid] = e.target.id.split('--');
        deleteFood(orderFirebaseKey, uid).then((itemArray) => getFoodItemsByOrderId(uid, itemArray));
      }
    }

    if (e.target.id.includes('editOrder')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrder(firebaseKey).then((orderObj) => createOrderForm(orderObj));
    }

    if (e.target.id === 'landing-view-revenue') {
      getRevenue().then((revenueArray) => revenuePage(revenueArray));
    }
    // CLICK EVENT FOR OPENING ADD ITEM FORM
    if (e.target.id.includes('add-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      addItem(firebaseKey);
    }

    if (e.target.id.includes('payment-btn')) {
      addPaymentForm();
    }
  });
};
export default domEvents;

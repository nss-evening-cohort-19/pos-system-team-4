/* eslint-disable implicit-arrow-linebreak */
import { deleteFood } from './foodItemsData';
import { deleteOrder, getOrderItems } from './ordersData';

const deleteOrderItems = (orderID) => new Promise((resolve, reject) => {
  getOrderItems(orderID).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((item) => deleteFood(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(orderID).then(resolve);
    });
  }).catch((error) => reject(error));
});

export default deleteOrderItems;

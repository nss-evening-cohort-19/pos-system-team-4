/* eslint-disable implicit-arrow-linebreak */
import { deleteFood, getFoodItemsByOrderId, getFood } from './foodItemsData';
import { deleteOrder, getOrderItems, getOrder } from './ordersData';

const viewOrderDetails = (orderFirebaseKey) =>
  new Promise((resolve, reject) => {
    getOrder(orderFirebaseKey)
      .then((orderObj) => {
        getOrderItems(orderObj.firebaseKey).then((orderItemsArray) => {
          resolve({ orderItems: orderItemsArray, ...orderObj });
        });
      })
      .catch((error) => reject(error));
  });

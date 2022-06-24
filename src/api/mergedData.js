/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import firebaseConfig from './apiKeys';
import { deleteFood } from './foodItemsData';
import { deleteOrder, getOrderItems, getOrder } from './ordersData';
import { createRevenue } from './revenueData';

const dbUrl = firebaseConfig.databaseURL;

const deleteOrderItems = (orderID) => new Promise((resolve, reject) => {
  getOrderItems(orderID).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((item) => deleteFood(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(orderID).then(resolve);
    });
  }).catch((error) => reject(error));
});

// close order, and copy parts of that order object to a new revenue object
const closeOrder = (firebaseKey) => new Promise((resolve, reject) => {
  const closingPayload = { isClosed: true };
  axios.patch(`${dbUrl}/orders/${firebaseKey}.json`, closingPayload)
    .then(() => {
      getOrder(firebaseKey)
        .then((orderObj) => {
          const revenueObj = {
            callInOrder: orderObj.callInOrder,
            dateTime: orderObj.dateTime,
            firebaseKey: '',
            orderID: orderObj.orderID,
            paymentID: orderObj.paymentID,
            tip: orderObj.tip,
            total: orderObj.total,
          };
          createRevenue(revenueObj);
        });
    })
    .catch((error) => reject(error));
});

export {
  deleteOrderItems,
  closeOrder
};

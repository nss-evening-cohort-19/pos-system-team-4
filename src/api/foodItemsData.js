import axios from 'axios';
import firebaseConfig from './apiKeys';
import { getOrderByUid } from './ordersData';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL FOOD ITEMS
const getFood = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foodItems.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET A SINGLE ITEM
const getSingleFoodItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foodItems/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE FOOD ITEMS
const createFood = (foodObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/foodItems.json`, foodObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/foodItems/${response.data.name}.json`, payload)
        .then(() => {
          getFood(foodObject).then(resolve);
        });
    }).catch(reject);
});

// DELETE FOOD ITEMS
const deleteFood = (firebaseKey, orderFirebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/foodItems/${firebaseKey}.json`)
    .then(() => {
      getOrderByUid(orderFirebaseKey).then((itemArray) => resolve(itemArray));
    })
    .catch(reject);
});

// UPDATE FOOD ITEMS
const updateFood = () => (foodObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/foodItems/${foodObject.firebaseKey}.json`, foodObject)
    .then(() => getFood().then(resolve))
    .catch(reject);
});

// get food order
const getFoodOrderByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/fooditems.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// order details
const getFoodItemsByOrderId = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foodItems.json?orderBy="orderID"&equalTo="${firebaseKey}"`)
    .then((itemArray) => resolve(Object.values(itemArray.data)))
    .catch((error) => reject(error));
});

// CREATE FOOD ITEMS
const createFood = (foodObject, firebaseKey) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/foodItems.json`, foodObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/foodItems/${response.data.name}.json`, payload)
        .then(() => {
          getFoodItemsByOrderId(firebaseKey).then(resolve);
        });
      console.warn(firebaseKey);
    }).catch(reject);
});
export {
  getFood,
  getSingleFoodItem,
  createFood,
  deleteFood,
  updateFood,
  getFoodItemsByOrderId,
  getFoodOrderByUid
};

import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL FOOD ITEMS
const getFood = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foodItems.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
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
const deleteFood = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/foodItems/${firebaseKey}.json`)
    .then(() => {
      getFood().then((foodArray) => resolve(foodArray));
    })
    .catch((error) => reject(error));
});
// UPDATE FOOD ITEMS
const updateFood = () => (foodObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/foodItems/${foodObject.firebaseKey}.json`, foodObject)
    .then(() => getFood().then(resolve))
    .catch(reject);
});

export {
  getFood,
  createFood,
  deleteFood,
  updateFood
};

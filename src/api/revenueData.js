import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET REVENUE
const getRevenue = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/revenue.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error))
});

// DELETE REVENUE
const deleteRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/revenue/${firebaseKey}.json`)
    .then(() => {
      getRevenue().then((revArray) => resolve(revArray));
    })
    .catch((error) => reject(error));
});

// CREATE REVENUE
const createRevenue = (revObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/revenue.json`, revObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/revenue/${response.data.name}.json`, payload)
        .then(() => {
          getRevenue(revObject).then(resolve);
        });
    }).catch(reject)
});

// UPDATE REVENUE
const updateRevenue = (revObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/revenue/${revObject.firebaseKey}.json`, revObject)
    .then(() => getRevenue().then(resolve))
    .catch(reject);
});

// GET REV BY ORDER
const getRevenueOrder = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/revenue.json?orderBy="orderID"&equalTo="${orderId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET REV BY PAYMENT
const getRevenuePayment = (paymentId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/revenue.json?orderBy="paymentID"&equalTo="${paymentId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET REV BY DATE???

export {
  getRevenue,
  createRevenue,
  deleteRevenue,
  updateRevenue,
  getRevenueOrder,
  getRevenuePayment
}
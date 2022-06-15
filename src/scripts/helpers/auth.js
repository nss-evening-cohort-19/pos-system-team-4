import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.warn('logged in');
      startApp(user);
    } else {
      console.warn('not logged in');
      loginButton();
    }
  });
};

export default checkLoginStatus;

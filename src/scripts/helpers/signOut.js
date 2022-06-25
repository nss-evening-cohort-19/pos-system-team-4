import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';

const signOut = () => {
  clearDom();
  firebase.auth().signOut();
};

export default signOut;

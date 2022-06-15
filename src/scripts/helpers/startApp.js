import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import clearDom from './clearDom';

const startApp = (user) => {
  clearDom();
  domBuilder(user);
  navBar(user);
};

export default startApp;

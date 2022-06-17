import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import clearDom from './clearDom';

const startApp = (user) => {
  clearDom();
  domBuilder(user);
  navBar(user);
  navigationEvents(user);
};

export default startApp;

import domBuilder from '../components/domBuilder';
import landingPage from '../components/landingPage';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import clearDom from './clearDom';

const startApp = (user) => {
  clearDom();
  domBuilder(user);
  navBar(user);
  navigationEvents(user);
  landingPage(user);
};

export default startApp;

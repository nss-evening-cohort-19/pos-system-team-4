import domBuilder from '../components/domBuilder';
import landingPage from '../components/landingPage';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import clearDom from './clearDom';

const startApp = (user) => {
  clearDom();
  domBuilder(user);
  navBar(user);
  navigationEvents(user);
  landingPage(user);
  domEvents();
  formEvents();
};

export default startApp;

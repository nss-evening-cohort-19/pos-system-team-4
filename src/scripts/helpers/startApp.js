import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
};

export default startApp;

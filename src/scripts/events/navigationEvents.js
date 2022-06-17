import landingPage from '../components/landingPage';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id === 'google-auth') {
      signOut();
    }
    if (e.target.id === 'logo') {
      document.querySelector('#main').innerHTML = '';
      landingPage();
    }
  });
};

export default navigationEvents;

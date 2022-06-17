import signOut from '../helpers/signOut';

const navigationEvents = () => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id === 'google-auth') {
      signOut();
    }
  });
};

export default navigationEvents;

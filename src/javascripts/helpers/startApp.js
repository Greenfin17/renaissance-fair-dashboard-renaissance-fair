import domEvents from './domEvents';
import domBuilder from './views/domBuilder';

const startApp = () => {
  domEvents();
  domBuilder();
};

export default startApp;
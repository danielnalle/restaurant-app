import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();

  // Navigation drawer
  const hamburgerButton = document.querySelector('#hamburgerButton');
  const navigationDrawer = document.querySelector('#navigationDrawer');

  hamburgerButton.addEventListener('click', (event) => {
    navigationDrawer.style.display = navigationDrawer.style.display === 'flex' ? 'none' : 'flex';
    event.stopPropagation();
  });

  // Close navigation drawer when clicking outside
  document.addEventListener('click', (event) => {
    if (!navigationDrawer.contains(event.target) && !hamburgerButton.contains(event.target)) {
      navigationDrawer.style.display = 'none';
    }
  });
});
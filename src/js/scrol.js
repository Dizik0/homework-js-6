import variables from './variables';

variables.anchor.addEventListener('click', () => {
  window.scrollTo({
    top: -100,
    behavior: 'smooth',
  });
});

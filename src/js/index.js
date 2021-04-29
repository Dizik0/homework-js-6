import '../../src/styles.css';
import './apiService';
import './scrol';
import { getListPhotos } from './apiService';
import { renderListPhotos } from './render-photo-card';
import variables from './variables';

let pageNumber = 0;

const observerHandelbars = entries => {
  if (entries[0].isIntersecting) {
    addRender(1);
  }
};

const observer = new IntersectionObserver(observerHandelbars);
observer.observe(variables.obServerList);

const addRender = async event => {
  if (!event.target) {
    pageNumber += 1;
  } else {
    pageNumber = 1;
    variables.galerry.innerHTML = '';
  }
  const { hits } = await getListPhotos(variables.input.value, pageNumber);
  renderListPhotos(hits);
};

variables.SearchBtn.addEventListener('click', addRender);

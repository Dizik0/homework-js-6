import oneList from '../templates/one-card.hbs';
import variables from './variables';

const renderListPhotos = result => {
  variables.galerry.insertAdjacentHTML('beforeend', oneList(result));
};

export { renderListPhotos };

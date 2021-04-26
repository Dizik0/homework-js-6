import '../../src/styles.css';
import './api-pixabay';
import oneList from '../templates/one-card.hbs';
import { getListPhotos } from './api-pixabay';

const input = document.querySelector('.input');
const SearchBtn = document.querySelector('.search-btn');
const galerry = document.querySelector('.gallery');

function render({ hits }) {
  const oneCard = oneList(hits);
  galerry.innerHTML = oneCard;
}
const addRender = () => {
  getListPhotos(input.value).then(render);
};
SearchBtn.addEventListener('click', addRender);

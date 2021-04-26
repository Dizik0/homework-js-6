const URL_API = 'https://pixabay.com/api/';
const KEY = '21345832-5dab6ae111cd5d8e046b71308';

let pageNumber = 1;

function getListPhotos(name) {
  pageNumber += 1;
  return fetch(
    `${URL_API}?image_type=photo&orientation=horizontal&q=${name}&page=${pageNumber}&per_page=12&key=${KEY}`,
  ).then(list => list.json());
}
console.log(pageNumber);

export { getListPhotos };

const URL_API = 'https://pixabay.com/api/';
const KEY = '21345832-5dab6ae111cd5d8e046b71308';

async function getListPhotos(name, pageNumber) {
  const resultRequest = await fetch(
    `${URL_API}?image_type=photo&orientation=horizontal&q=${name}&page=${pageNumber}&per_page=12&key=${KEY}`,
  );

  return await resultRequest.json();
}

export { getListPhotos };

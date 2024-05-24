import { createPhotoDescriptions } from './data.js';
const SIMILAR_WIZARD_COUNT = -10;
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoDescriptions = createPhotoDescriptions();

function showImages() {

  const picturesFragment = document.createDocumentFragment();
  photoDescriptions.forEach(({ url, likes, comments, description }) => {

    const userPicture = pictureTemplate.cloneNode(true);
    pictures.appendChild(userPicture);
    userPicture.querySelector('.picture__img').src = url;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comments.length;
    userPicture.querySelector('.picture__img').alt = description;
    pictures.appendChild(picturesFragment);

  });
  return photoDescriptions;
}


const showDefaultImages = () => {
  const filterDefault = document.getElementById('filter-default');
  const picturestoRemove = document.querySelectorAll('.picture');
  filterDefault.addEventListener('click', () => {
    picturestoRemove.forEach((element) => {
      element.classList.remove('hidden');
    });
  });
};


function showRandomImages() {
  const filterRandom = document.getElementById('filter-random');
  filterRandom.addEventListener('click', () => {
    const picturesList = document.querySelectorAll('.picture');
    picturesList.forEach((element) => {
      element.classList.remove('hidden');
    });
    const shuffledPictures = Array.from(picturesList).sort(() => Math.random() - 0.5);
    const randomPictures = shuffledPictures.slice().slice(0, SIMILAR_WIZARD_COUNT);
    randomPictures.forEach((element) => {
      element.classList.add('hidden');
    });
  });
}

function showPopularImages() {
  const filterPopular = document.getElementById('filter-discussed');
  filterPopular.addEventListener('click', () => {
    const picturesList = document.querySelectorAll('.picture');
    picturesList.forEach((element) => {
      element.classList.remove('hidden');
    });
    const picturesArray = Array.from(picturesList);
    const popularPictures = picturesArray.sort((a, b) => b.comments - a.comments);

    popularPictures.forEach((element) => {
      element.classList.remove('hidden');
    });
  });
}
export { showImages, showDefaultImages, showRandomImages, showPopularImages };



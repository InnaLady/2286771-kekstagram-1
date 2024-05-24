import { createPhotoDescriptions } from './data.js';

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

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showRandomImages() {
  const randomPictures = shuffle([...pictures]);
  showImages(randomPictures);
}
export { showImages, showDefaultImages };



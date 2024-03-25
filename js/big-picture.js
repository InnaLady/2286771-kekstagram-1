import './paint.js';

const bigPicture = document.querySelector('.big-picture');
const thumbnails = document.querySelector('.big-picture__img');
//bigPicture.classList.remove('hidden');

const addThumbnailClickHandler = function (thumbnail, picture) {
  thumbnails.addEventListener('click', () => {
    bigPicture.src = picture;
  });
};

addThumbnailClickHandler();


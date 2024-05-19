import { createPhotoDescriptions } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoDescriptions = createPhotoDescriptions();

const picturesFragment = document.createDocumentFragment();


photoDescriptions.forEach(({ url, likes, comments, description }) => {
  const userPicture = pictureTemplate.cloneNode(true);
  pictures.appendChild(userPicture);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.querySelector('.picture__img').alt = description;

});

const appendChild = function () {
  pictures.appendChild(picturesFragment);

};
appendChild();

export { appendChild };


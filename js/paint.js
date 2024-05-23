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

const filterDefault = document.getElementById('filter-default');
const picturestoRemove = document.querySelectorAll('.picture');

filterDefault.addEventListener('click', () => {
console.log(picturestoRemove);
  picturestoRemove.forEach((element) => {
    element.classList.add('hidden');
  });
});

export { showImages };



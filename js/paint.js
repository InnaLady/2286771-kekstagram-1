import { getRandomIdfromRangeGenerator } from './util.js';
const SIMILAR_WIZARD_COUNT = 10;
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const defaultBtn = document.getElementById('filter-default');
const randomBtn = document.getElementById('filter-random');
const popularBtn = document.getElementById('filter-discussed');


const renderPictures = (items) => {

  const picturesFragment = document.createDocumentFragment();

  items.forEach(({ url, likes, comments, description }) => {
    const userPicture = pictureTemplate.cloneNode(true);

    userPicture.querySelector('.picture__img').src = url;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comments.length;
    userPicture.querySelector('.picture__img').alt = description;
    picturesFragment.appendChild(userPicture);
  });
  picturesList.appendChild(picturesFragment);
};

const showDefaultImages = () => {
  const pictures = document.querySelectorAll('.picture');
  const pictureList = document.querySelector('.pictures');
  defaultBtn.addEventListener('click', () => {

    pictures.forEach((item) => pictureList.appendChild(item));
    pictures.forEach((element) => {
      element.classList.remove('hidden');
    });

  });
};


function showRandomImages() {
  randomBtn.addEventListener('click', () => {
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach((element) => {
      element.classList.remove('hidden');
    });
    const randomIndex = getRandomIdfromRangeGenerator(0, pictures.length - 1);
    const randomPicturesCount = Math.min(pictures.length - SIMILAR_WIZARD_COUNT, pictures.length);

    const randomPictures = Array.from({ length: randomPicturesCount }, () => pictures[randomIndex()]);

    randomPictures.forEach((element) => {
      element.classList.add('hidden');
    });

  });
}

const showPopularImages = () => {
  const pictureList = document.querySelector('.pictures');
  const picture = [...pictureList.querySelectorAll('.picture')];

  const comments = (item) => item.querySelector('.picture__comments').textContent;
  const popularPictures = picture.sort((a, b) => comments(b) - comments(a));

  popularBtn.addEventListener('click', (evt) => {

    picture.forEach((item) => pictureList.appendChild(item));
    evt.target.classList.add('img-filters__button--active');
    popularPictures.forEach((element) => {
      element.classList.remove('hidden');
    });
  });
};

const buttons = [defaultBtn, randomBtn, popularBtn];

function handleButtonClick(event) {
  buttons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
  event.target.classList.add('img-filters__button--active');
}

buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});


export { renderPictures, showDefaultImages, showRandomImages, showPopularImages };



const SIMILAR_WIZARD_COUNT = -10;
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
import { getRandomIdfromRangeGenerator } from './util.js';

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
  const filterDefault = document.getElementById('filter-default');
  const picture = document.querySelectorAll('.picture');
  filterDefault.addEventListener('click', () => {
    picture.forEach((element) => {
      element.classList.remove('hidden');
    });
  });
};


function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = getRandomIdfromRangeGenerator(0, i);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}


function showRandomImages() {
  const filterRandom = document.getElementById('filter-random');
  filterRandom.addEventListener('click', () => {

    const picture = document.querySelectorAll('.picture');
    picture.forEach((element) => {
      element.classList.remove('hidden');
    });

    const shuffledPictures = shuffleArray(Array.from(picture));
    const randomPictures = shuffledPictures.slice(0, SIMILAR_WIZARD_COUNT);

    randomPictures.forEach((element) => {
      element.classList.add('hidden');
    });
  });
}

const showPopularImages = () => {
  const pictureList = document.querySelector('.pictures');
  const picture = [...pictureList.querySelectorAll('.picture')];
  const btn = document.getElementById('filter-discussed');
  const comments = (item) => item.querySelector('.picture__comments').textContent;

  const popularPictures = picture.sort((a, b) => comments(b) - comments(a));
  picture.forEach((item) => pictureList.appendChild(item));
  btn.addEventListener('click', () => {

    picture.forEach((element) => {
      element.classList.add('hidden');
    });
    showPopularImages();
    popularPictures.forEach((element) => {
      element.classList.remove('hidden');
    });

  });
};
export { renderPictures, showDefaultImages, showRandomImages, showPopularImages };



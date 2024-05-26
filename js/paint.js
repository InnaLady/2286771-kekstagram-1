const SIMILAR_WIZARD_COUNT = -10;
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const renderPictures = (pictures) => {

  const picturesFragment = document.createDocumentFragment();

  pictures.forEach(({ url, likes, comments, description }) => {
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

    const picturesAll = document.querySelectorAll('.picture');
    picturesAll.forEach((element) => {
      element.classList.remove('hidden');
    });
    const shuffledPictures = Array.from(picturesAll).sort(() => Math.random() - 0.5);
    const randomPictures = shuffledPictures.slice().slice(0, SIMILAR_WIZARD_COUNT);
    randomPictures.forEach((element) => {
      element.classList.add('hidden');

    });
  });
}

const showPopularImages = () => {
  const list = document.querySelector('.pictures');
  const items = [...list.querySelectorAll('.picture')];
  const btn = document.getElementById('filter-discussed');
  const comments = (item) => item.querySelector('.picture__comments').textContent;

  const popularPictures = items.sort((a, b) => comments(b) - comments(a));
  items.forEach((item) => list.appendChild(item));
  btn.addEventListener('click', () => {
    const picturesAll = document.querySelectorAll('.picture');
    picturesAll.forEach((element) => {
      element.classList.add('hidden');
    });
    showPopularImages();
    popularPictures.forEach((element) => {
      element.classList.remove('hidden');
    });

  });
};
export { renderPictures, showDefaultImages, showRandomImages, showPopularImages };



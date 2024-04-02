import './paint.js';
import { createCommentsArray } from './data.js';
import { isEscapeKey } from './util.js';

const modalBlock = document.querySelector('.big-picture');
const block = document.querySelector('.big-picture__img');
const picture = block.querySelector('img');
const links = document.querySelectorAll('.picture');
const cancel = document.querySelector('.big-picture__cancel');
const likes = document.querySelector('.likes-count');
const thumbnailsLikes = document.querySelectorAll('.picture__likes');
const commentsCount = document.querySelector('.comments-count');
const thumbnailsComments = document.querySelector('.picture__comments');
const caption = document.querySelector('.social__caption');


const onModalBlockKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalBlock.classList.remove('hidden');
  }
};
const openUserModal = function () {

  links.forEach((link) => {
    link.addEventListener('click', () => {
      modalBlock.classList.remove('hidden');
      document.body.classList.add('modal-open');
      const thumbnail = link.querySelector('.picture__img');
      picture.src = thumbnail.src;
      likes.textContent = thumbnailsLikes.textContent;
      commentsCount.textContent = thumbnailsComments.textContent;
      caption.textContent = thumbnail.alt;

      document.addEventListener('keydown', onModalBlockKeydown);
    });

  });
};


const closeUserModal = function () {
  cancel.addEventListener('click', () => {
    modalBlock.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.removeEventListener('keydown', onModalBlockKeydown);
};

const commentsTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const comments = document.querySelector('.social__comments');
const pictureComment = createCommentsArray();

const commentsFragment = document.createDocumentFragment();

pictureComment.forEach(({ avatar, messages, name }) => {
  const userComment = commentsTemplate.cloneNode(true);
  comments.appendChild(userComment);
  userComment.querySelector('.social__picture').src = avatar;
  userComment.querySelector('.social__text').textContent = messages;
  userComment.querySelector('.social__picture').alt = name;
});

const appendComment = function () {
  comments.appendChild(commentsFragment);
};
appendComment();


export { openUserModal };
export { closeUserModal };

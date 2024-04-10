import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');

const onFormKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadOverlay.classList.add('hidden');
    uploadFile.value = '';
  }
};

const openForm = function () {

  uploadFile.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');

  });
  document.addEventListener('keydown', onFormKeydown);
};

openForm();


const closeForm = function () {

  uploadCancel.addEventListener('click', () => {
    uploadOverlay.classList.add('hidden');
    uploadFile.value = '';

  });

  document.removeEventListener('keydown', onFormKeydown);
};

closeForm();
export { openForm };
export { closeForm };


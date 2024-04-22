import { isEscapeKey } from './util.js';
import {createPristine } from './validation.js';

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');


const onFormKeydown = (evt) => {
  if (textDescription === document.activeElement) {
    return evt;
  } if (textHashtags === document.activeElement) {
    return evt;
  } else {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      uploadOverlay.classList.add('hidden');
      uploadFile.value = '';
    }
  }
};

const openForm = function () {

  uploadFile.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onFormKeydown);
  });
};

openForm();
const uploadForm = document.querySelector('.img-upload__form');

const closeForm = function () {


  uploadCancel.addEventListener('click', () => {
    uploadOverlay.classList.add('hidden');
    uploadFile.value = '';
    document.removeEventListener('keydown', onFormKeydown);
  });
};

closeForm();
export { openForm };
export { closeForm };

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (createPristine) {
    uploadForm.submit();
  }
});

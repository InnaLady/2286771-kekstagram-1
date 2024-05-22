import { isEscapeKey, showAlert } from './util.js';
import { createPristine } from './validation.js';
import { sendData } from './api.js';
import { showUploadSuccess, showUploadError } from './message.js';


const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const uploadForm = document.querySelector('.img-upload__form');
const pristine = createPristine(uploadForm, textHashtags, textDescription);
const submitButton = uploadForm.querySelector('.img-upload__submit');
const filterDefault = document.getElementById('filter-default');
const filterRandom = document.getElementById('filter-random');
import { showDefaultImages, showRandomImages } from './filter.js';


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

const closeForm = function () {

  uploadOverlay.classList.add('hidden');
  uploadFile.value = '';
  document.removeEventListener('keydown', onFormKeydown);
  uploadOverlay.classList.add('hidden');
  uploadFile.value = '';
  document.removeEventListener('keydown', onFormKeydown);
};

export { openForm };
export { closeForm };

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

filterDefault.addEventListener('click', showDefaultImages);

const setRandomClick = () => {
  filterRandom.addEventListener('click', () => {
    showRandomImages();
    console.log('ksdjhfk ');

  });
};
setRandomClick();


const setUserFormSubmit = () => {

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))

        .then(() => {
          showUploadSuccess();
          closeForm();
        })
        .catch((err) => {
          showAlert(err.message);
          showUploadError();
        }
        )
        .finally(unblockSubmitButton);
    }
  });
};

export { setUserFormSubmit, setRandomClick };


const fullSizeModalHandler = function () {
  uploadCancel.addEventListener('click', () => {
    closeForm();

  });
};

fullSizeModalHandler();


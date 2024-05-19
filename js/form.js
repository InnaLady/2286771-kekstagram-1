import { isEscapeKey, showAlert } from './util.js';
import { createPristine } from './validation.js';
import { sendData } from './api.js';


const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const uploadForm = document.querySelector('.img-upload__form');
const pristine = createPristine(uploadForm, textHashtags, textDescription);

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


const closeForm = function () {

  uploadOverlay.classList.add('hidden');
  uploadFile.value = '';
  document.removeEventListener('keydown', onFormKeydown);
};

closeForm();
export { openForm };
export { closeForm };

const setUserFormSubmit = () => {

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {

      sendData(new FormData(evt.target))

        .then(() => {
          closeForm();
        })
        .catch((err) => {
          showAlert(err.message);
        });

    }
  });
};

setUserFormSubmit();
export { setUserFormSubmit };


const fullSizeModalHandler = function () {
  uploadCancel.addEventListener('click', () => {
    closeForm();

  });
};

fullSizeModalHandler();

import { hashtagCheck } from './regexp.js';

const uploadForm = document.querySelector('.img-upload__form');

const onload = function () {

  const pristine = new Pristine(uploadForm);
  const isValid = pristine.validate();

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (hashtagCheck && isValid) {
      uploadForm.submit();
    }

  });

};
onload();
export { onload };

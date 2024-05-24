import { createPhotoDescriptions } from './data.js';
createPhotoDescriptions();
import { showImages, showDefaultImages } from './paint.js';
import { openUserModal, closeUserModal } from './big-picture.js';
openUserModal();
closeUserModal();
import { openForm, closeForm, setUserFormSubmit } from './form.js';
openForm();
import { updateScale } from './scale.js';
updateScale();
import { resetEffect } from './effects.js';
resetEffect();
import { getData } from './api.js';
import { showAlert } from './util.js';
const imgFilters = document.querySelector('.img-filters');


getData()
  .then((pictures) => {
    showImages(pictures);
    showDefaultImages();
    imgFilters.classList.remove('img-filters--inactive');

  })
  .catch(
    (err) => {
      showAlert(err.message);
    }

  );


setUserFormSubmit(closeForm);


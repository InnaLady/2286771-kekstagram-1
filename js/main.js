import { createPhotoDescriptions } from './data.js';
createPhotoDescriptions();
import { appendChild, showDefaultImages, showRandomImages, showPopularImages } from './paint.js';
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
import './preview.js';

getData()
  .then((pictures) => {
    appendChild(pictures);
    showDefaultImages();
    showRandomImages ();
    showPopularImages();
    imgFilters.classList.remove('img-filters--inactive');

  })
  .catch(
    (err) => {
      showAlert(err.message);
    }

  );


setUserFormSubmit(closeForm);


import { createPhotoDescriptions, createCommentsArray } from './data.js';
createPhotoDescriptions();
import { renderPictures, showDefaultImages, showRandomImages, showPopularImages } from './paint.js';
import { openUserModal, closeUserModal, appendComment} from './big-picture.js';
closeUserModal();
appendComment();
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
  .then((links) => {
    renderPictures(links);
    showDefaultImages();
    showRandomImages ();
    showPopularImages();
    imgFilters.classList.remove('img-filters--inactive');
    openUserModal();
    appendComment();
    createCommentsArray();
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }

  );


setUserFormSubmit(closeForm);


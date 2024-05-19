import { createPhotoDescriptions } from './data.js';
import './util.js';
createPhotoDescriptions();
import { appendChild } from './paint.js';
appendChild();
import { openUserModal,closeUserModal } from './big-picture.js';
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

getData()
  .then(() => {
    appendChild();
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );


setUserFormSubmit(closeForm);


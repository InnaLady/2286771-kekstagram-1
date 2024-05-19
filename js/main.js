import { createPhotoDescriptions } from './data.js';
import './util.js';
createPhotoDescriptions();
import { appendChild } from './paint.js';
appendChild();
import { openUserModal } from './big-picture.js';
openUserModal();
import { closeUserModal } from './big-picture.js';
closeUserModal();
import './big-picture.js';
import { openForm } from './form.js';
openForm();
import { closeForm } from './form.js';
closeForm();
import './form.js';
import { updateScale } from './scale.js';
updateScale();
import { resetEffect } from './effects.js';
resetEffect();
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';
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


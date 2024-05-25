const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const preview = document.querySelector('.img-upload__preview img');
const fileChooser = document.querySelector('.img-upload__input');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});

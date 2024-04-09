const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreview = document.querySelector('.img-upload__preview img');

const selectImage = function () {

  uploadFile.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    uploadPreview.src = uploadFile.src;
    console.log(uploadFile.src);
    console.log(uploadFile);
  });
};

selectImage();

export {selectImage};

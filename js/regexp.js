const textHashtags = document.querySelector('.text__hashtags');
const uploadForm = document.querySelector('.img-upload__form');

const hashtagCheck = function () {
  const pristine = new Pristine(uploadForm);

  const regexp = /^(#[a-zа-яё0-9]{1,19}\s){0,4}(#[a-zа-яё0-9]{1,19})(?![\s\S]*#\1)$/i;
  regexp.test(textHashtags.value);
  pristine.validate();
  if (regexp.test(textHashtags.value)) {
    const hashtagArray = Array.from(textHashtags.value);

    const hashtags = hashtagArray.split(' ');
    for (let i = 0; i < hashtags.length; i++) {
      if (hashtags.includes(hashtags[i], i + 1)) {
        return false;
      }
      return true;
    }
  }


  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (hashtagCheck) {
      uploadForm.submit();
    }
  });
};

hashtagCheck();



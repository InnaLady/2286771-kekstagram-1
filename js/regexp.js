/*const textHashtags = document.querySelector('.text__hashtags');


const hashtagCheck = function () {

  const regexp = /^(#[a-zа-яё0-9]{1,19}\s){0,4}(#[a-zа-яё0-9]{1,19})(?![\s\S]*#\1)$/i;
  regexp.test(textHashtags.value);
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

};
hashtagCheck();
export {hashtagCheck};

*/


const pictures = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
console.log
function showDefaultImages() {

  showImages(pictures);
}

function showRandomImages() {
  const randomPictures = shuffle([...pictures]);
  showImages(randomPictures);
}

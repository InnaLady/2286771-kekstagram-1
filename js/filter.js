
const pictures = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showRandomImages() {
  const randomPictures = shuffle([...pictures]);
  showImages(randomPictures);
}

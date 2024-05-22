import { appendChild } from './paint.js';
const pictures = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showDefaultImages() {
  appendChild(pictures);
}

function showRandomImages() {
  const randomPictures = shuffle([...pictures]).slice(0, 10);
  appendChild(randomPictures);
}


export {showDefaultImages, showRandomImages};


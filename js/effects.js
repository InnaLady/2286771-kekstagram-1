const uploadPreview = document.querySelector('.img-upload__preview');
const radioButton = document.querySelector('.effects__radio');
const sliderElement = document.querySelector('.img-upload__effect-level');
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

export './effects.js';

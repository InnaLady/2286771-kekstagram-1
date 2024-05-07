
const effectsRadio = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

const effectsMap = {
  chrome: {
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
  },
  heat: {
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const resetEffect = function () {

  noUiSlider.create(effectLevelSlider, {
    start: 100,
    range: {
      min: 0,
      max: 100,
    },
  });

  effectLevelSlider.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
  });
};

export { resetEffect };


const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    unit: '',
    min: 0,
    max: 100,
    step: 1,
  },

  {
    name: 'chrome',
    style: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  {
    name: 'sepia',
    style: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  {
    name: 'marvin',
    style: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'phobos',
    style: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
  },
  {
    name: 'heat',
    style: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1,
  },

];

const DEFAULT_EFFECTS = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECTS;


const imageElement = document.querySelector('.img-upload__preview  img');
const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');

const isDefault = () => chosenEffect === DEFAULT_EFFECTS;

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }

};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageElement.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = isDefault()
    ? DEFAULT_EFFECTS.style
    : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectLevelValue.value = sliderValue;
};

const resetEffect = () => {
  chosenEffect = DEFAULT_EFFECTS;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECTS.min,
    max: DEFAULT_EFFECTS.max,
  },
  start: DEFAULT_EFFECTS.max,
  step: DEFAULT_EFFECTS.step,
  connect: 'lower',
});
hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);


export { resetEffect };


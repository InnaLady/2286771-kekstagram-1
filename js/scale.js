const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');

let scaleValue = 100;
const updateScale = function () {

  uploadPreview.style.transform = `scale(${scaleValue / 100})`;
  scaleValueInput.value = `${scaleValue}%`;

  scaleSmaller.addEventListener('click', () => {
    if (scaleValue > 25) {
      scaleValue -= 25;
      uploadPreview.style.transform = `scale(${scaleValue / 100})`;
      scaleValueInput.value = `${scaleValue}%`;
    }
  });

  scaleBigger.addEventListener('click', () => {
    if (scaleValue < 100) {
      scaleValue += 25;
      uploadPreview.style.transform = `scale(${scaleValue / 100})`;
      scaleValueInput.value = `${scaleValue}%`;
    }

  });


};

export { updateScale };


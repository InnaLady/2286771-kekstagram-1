
const isPalindrome = function (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i <= string.length; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return 'Не палиндром';
    }
  }
  return 'Палиндром';
};
isPalindrome();
//console.log(isPalindrome('Лёша на полке клопа нашёл '));

const isNumber = function (string) {
  let result = '';
  for (let i = 0; i <= string.length; i++) {
    const letter = parseInt(string.at(i), 10);
    if ((!isNaN(letter))) {
      result += letter;
    }
  }
  if (result === '') {
    return NaN;
  }
  return parseInt(result, 10);
};

isNumber('а я томат');

//console.log(isNumber('а я томат'));


const createNewString = function (originalString, minLength, additionalString) {

  let newString = originalString;
  if (originalString.length >= minLength) {
    return newString;
  }
  const additionalStringLength = minLength - originalString.length;
  newString = additionalString.slice(0, additionalStringLength) + newString;

  if (newString.length <= minLength) {
    const newStringLength = minLength - newString.length;
    for (let i = newStringLength; i >= 1; i--) {
      newString = additionalString.slice(0, i) + newString;
    }
    //console.log(newString);
  }

};

createNewString('q', 4, 'werty');

//console.log(createNewString('q', 4, 'werty'));

const checkLength = function (string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  }
  return false;
};
checkLength('Кекстаграм12345678', 10);

//console.log(checkLength('Кекстаграм12345678', 10));


const checkLengthTwo = function (string, maxlength) {
  return string.length <= maxlength;
};

checkLengthTwo('Кекстаграм12345678', 10);

//console.log(checkLengthTwo('Кекстаграм12345678', 10));

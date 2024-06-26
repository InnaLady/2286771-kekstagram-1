
const HASHTAG_COUNT_MAX = 5;
const DESCRIPTION_LENGTH_MAX = 140;
const HASHTAG_REGEX = /^(#[a-zа-яё0-9]{1,19}\s){0,4}(#[a-zа-яё0-9]{1,19})(?![\s\S]*#\1)$/i;
const ErrorText = {
  INVALID_COUNT: `Количество хэш-тегов превышает ${HASHTAG_COUNT_MAX}`,
  NOT_UNIQUE: 'Хэш-теги должны быть уникальными',
  INVALID_SYNTAX: 'Неправильный хэш-тег',
  INVALID_LENGTH: `Длина комментария больше ${DESCRIPTION_LENGTH_MAX} символов`
};

const normalizeTags = (tagString) => tagString.trim().toLowerCase().split(' ').filter(Boolean);

const hasValidTagCount = (value) => normalizeTags(value).length <= HASHTAG_COUNT_MAX;

const hasAllUniqueTags = (value) => {
  const normalizedTags = normalizeTags(value);

  return normalizedTags.length === new Set(normalizedTags).size;
};

const hasAllValidTags = (value) => normalizeTags(value).every((tag) => HASHTAG_REGEX.test(tag));

const hasValidDescriptionLength = (value) => value.length <= DESCRIPTION_LENGTH_MAX;


const createPristine = (form, hashtagFieldNode, descriptionFieldNode) => {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
    errorTextClass: 'img-upload__field-wrapper--error',
  });

  pristine.addValidator(hashtagFieldNode, hasValidTagCount, ErrorText.INVALID_COUNT);
  pristine.addValidator(hashtagFieldNode, hasAllUniqueTags, ErrorText.NOT_UNIQUE);
  pristine.addValidator(hashtagFieldNode, hasAllValidTags, ErrorText.INVALID_SYNTAX);
  pristine.addValidator(descriptionFieldNode, hasValidDescriptionLength, ErrorText.INVALID_LENGTH);

  return pristine;
};
export { createPristine };

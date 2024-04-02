import { getRandomIntInclusive } from './util.js';
import { getRandomIdfromRangeGenerator } from './util.js';

const DESCRIPTION = [
  'Волга',
  'Нева',
  'Лена',
  'Енисей',
  'Селенга',
  'Иртыш',
  'Амур',
  'Обь',
];

const NAMES = [
  'Артем',
  'Василий',
  'Петр',
  'Захар',
  'Александр',
  'Андрей',
  'Тимофей',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function createIdGenerator() {
  {
    let lastGeneratedId = 0;
    return function () {
      lastGeneratedId += 1;
      return lastGeneratedId;
    };
  }
}

const generateLikesId = getRandomIdfromRangeGenerator(15, 200);
const generateCommentsId = createIdGenerator();

const createComments = function () {
  const randomNamesIndex = getRandomIntInclusive(0, NAMES.length - 1);
  const randomMessagesIndex = getRandomIntInclusive(0, MESSAGES.length - 1);

  return {
    id: generateCommentsId(),
    name: NAMES[randomNamesIndex],
    messages: MESSAGES[randomMessagesIndex],
    avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
  };
};

const generateUrlId = getRandomIdfromRangeGenerator(1, 25);
const generatePhotoId = getRandomIdfromRangeGenerator(1, 25);

const createPhotoDescription = () => {
  const randomDescriptionIndex = getRandomIntInclusive(0, DESCRIPTION.length - 1);
  const newArray = Array.from({ length: 6 }, createComments);

  return {
    id: generatePhotoId(),
    url: `photos/${generateUrlId()}.jpg`,
    description: DESCRIPTION[randomDescriptionIndex],
    likes: generateLikesId(),
    comments: newArray,
  };
};

const createPhotoDescriptions = () => Array.from({ length: 25 }, createPhotoDescription);
export { createPhotoDescriptions };
const createCommentsArray = () => Array.from({ length: 6 }, createComments);
export {createCommentsArray};

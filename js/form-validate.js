import {getMaxNumberInArray} from './utils.js';

const adForm = document.querySelector('.ad-form');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const ROOMS_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};
const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help'
});

Pristine.addMessages('ru', {
  required: 'Обязательное поле'
});
Pristine.setLocale('ru');

function validateAdFormTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

function validateAdFormPrice(value) {
  return value <= 100000;
}
function validateRooms () {
  return ROOMS_CAPACITY[roomNumber.value].includes(capacity.value);
}

function getCapacityErrorMessage() {
  let errorMessage = '';
  if (roomNumber.value === '100') {
    errorMessage = 'Не для гостей';
  } else {
    errorMessage = `
      Не более
      ${getMaxNumberInArray(ROOMS_CAPACITY[roomNumber.value])}
      ${roomNumber.value === '1' ? 'гостя' : 'гостей'}
    `;
  }
  return errorMessage;
}

function isAdFormValid() {
  return pristine.validate();
}

pristine.addValidator(adForm.querySelector('#title'), validateAdFormTitle, 'От 30 до 100 символов');
pristine.addValidator(adForm.querySelector('#price'), validateAdFormPrice, 'Не более 100 000');
pristine.addValidator(capacity, validateRooms, getCapacityErrorMessage);

roomNumber.addEventListener('change', () => {
  pristine.validate(capacity);
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isAdFormValid()) {
    // Send data on server
  } else {
    // Show incorrect fields
  }
});

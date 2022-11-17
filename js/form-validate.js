import {getMaxNumberInArray, isFieldEmpty, changeSelectValue} from './utils.js';

const adForm = document.querySelector('.ad-form');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const housingType = adForm.querySelector('#type');
const housingPrice = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const MIN_PRICE_BY_HOUSING_TYPE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};
const MAX_HOUSING_PRICE = 100000;
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

function validateAdFormRooms () {
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

function validateAdFormType() {
  if (!isFieldEmpty(housingPrice)) {
    pristine.validate(housingPrice);
  } else {
    housingPrice.placeholder = `От ${MIN_PRICE_BY_HOUSING_TYPE[housingType.value]} руб.`;
  }
}

function validateAdFormPrice() {
  return (MIN_PRICE_BY_HOUSING_TYPE[housingType.value] <= +housingPrice.value);
}

function getHousingPriceErrorMessage() {
  return `Не менее ${MIN_PRICE_BY_HOUSING_TYPE[housingType.value]} руб.`;
}

function validateAdFormPriceMax() {
  return (+housingPrice.value <= MAX_HOUSING_PRICE);
}

function getHousingPriceErrorMessageMax() {
  return `Не более ${MAX_HOUSING_PRICE} руб.`;
}

pristine.addValidator(adForm.querySelector('#title'), validateAdFormTitle, 'От 30 до 100 символов');
pristine.addValidator(housingPrice, validateAdFormPrice, getHousingPriceErrorMessage);
pristine.addValidator(housingPrice, validateAdFormPriceMax, getHousingPriceErrorMessageMax);
pristine.addValidator(capacity, validateAdFormRooms, getCapacityErrorMessage);

roomNumber.addEventListener('change', () => {
  pristine.validate(capacity);
});

housingType.addEventListener('change', () => {
  validateAdFormType();
});

timeIn.addEventListener('change', () => {
  changeSelectValue(timeIn.value, timeOut);
});

timeOut.addEventListener('change', () => {
  changeSelectValue(timeOut.value, timeIn);
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isAdFormValid()) {
    // Send data on server
  } else {
    // Show incorrect fields
  }
});

export {pristine, adForm, housingPrice};

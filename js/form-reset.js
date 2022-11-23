import {setInAddressFieldLatLng, mainPinMarker, map} from './map.js';
import {pristine} from './form-validate.js';
import {MIN_PRICE_BY_HOUSING_TYPE, CENTER_OF_TOKYO} from './const.js';

const filterFormElement = document.querySelector('.map__filters');
const adFormElement = document.querySelector('.ad-form');
const adFormSliderElement = document.querySelector('.ad-form__slider');

function resetAdFormFeatures() {
  adFormElement.querySelectorAll('.features__checkbox').forEach((feature) => {
    feature.checked = false;
  });
}

function resetAdForm() {
  filterFormElement.reset();
  adFormElement.reset();
  pristine.reset();
  adFormSliderElement.noUiSlider.reset();
  mainPinMarker.setLatLng(CENTER_OF_TOKYO);
  map.closePopup();
  adFormElement.querySelector('#avatar').value = '';
  adFormElement.querySelector('#title').value = '';
  setInAddressFieldLatLng(CENTER_OF_TOKYO.lat, CENTER_OF_TOKYO.lng);
  adFormElement.querySelector('#type').value = 'flat';
  adFormElement.querySelector('#price').value = MIN_PRICE_BY_HOUSING_TYPE.flat;
  adFormElement.querySelector('#timein').value = '12:00';
  adFormElement.querySelector('#timeout').value = '12:00';
  adFormElement.querySelector('#room_number').value = '1';
  adFormElement.querySelector('#capacity').value = '1';
  adFormElement.querySelector('#description').value = '';
  adFormElement.querySelector('#images').value = '';
  resetAdFormFeatures();
}

export {resetAdForm};

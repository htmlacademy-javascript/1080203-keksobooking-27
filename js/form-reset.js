import {adForm} from './form-validate.js';
import {setInAddressFieldLatLng, mainPinMarker, map} from './map.js';
import {pristine} from './form-validate.js';
import {MIN_PRICE_BY_HOUSING_TYPE, CENTER_OF_TOKYO} from './const.js';
import {adFormSlider} from './form-activity.js';

function resetAdFormFeatures() {
  adForm.querySelectorAll('.features__checkbox').forEach((feature) => {
    feature.checked = false;
  });
}

function resetMapFilter() {
  const filterForm = document.querySelector('.map__filters');
  filterForm.reset();
}

function resetAdForm(evt) {
  if (evt) {
    evt.preventDefault();
  }
  adForm.querySelector('#avatar').value = '';
  adForm.querySelector('#title').value = '';
  setInAddressFieldLatLng(CENTER_OF_TOKYO.lat, CENTER_OF_TOKYO.lng);
  adForm.querySelector('#type').value = 'flat';
  adForm.querySelector('#price').value = MIN_PRICE_BY_HOUSING_TYPE.flat;
  adFormSlider.noUiSlider.reset();
  adForm.querySelector('#timein').value = '12:00';
  adForm.querySelector('#timeout').value = '12:00';
  adForm.querySelector('#room_number').value = '1';
  adForm.querySelector('#capacity').value = '1';
  adForm.querySelector('#description').value = '';
  mainPinMarker.setLatLng(CENTER_OF_TOKYO);
  adForm.querySelector('#images').value = '';
  resetAdFormFeatures();
  resetMapFilter();
  map.closePopup();
  pristine.reset();
}

export {resetAdForm};

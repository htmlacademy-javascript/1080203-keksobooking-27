import {addOrRemoveClassName} from './utils.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const adFormSlider = document.querySelector('.ad-form__slider');

function changeFormElementsActivity(elementsArray, activity) {
  Object.values(elementsArray).forEach((value) => {
    value.disabled = activity;
  });
}

function changeMapFilterActivity(action, deactivationClassName, fieldsActivity) {
  addOrRemoveClassName(mapFilters, action, deactivationClassName);
  changeFormElementsActivity(mapFilters.children, fieldsActivity);
}

function changeAdFormActivity(action, deactivationClassName, fieldsActivity) {
  addOrRemoveClassName(adForm, action, deactivationClassName);
  changeFormElementsActivity(adForm.children, fieldsActivity);
}

function deactivateAdsPage() {
  adFormSlider.setAttribute('disabled', true);
  changeAdFormActivity('add', 'ad-form--disabled', true);
  changeMapFilterActivity('add', 'ad-form--disabled', true);
}

function activateAdsPage() {
  adFormSlider.removeAttribute('disabled');
  changeAdFormActivity('remove', 'ad-form--disabled', false);
  changeMapFilterActivity('remove', 'ad-form--disabled', false);
}

export {
  deactivateAdsPage,
  activateAdsPage,
  changeMapFilterActivity,
  adFormSlider
};

import {addOrRemoveClassName} from './utils.js';

const adFormElement = document.querySelector('.ad-form');
const mapFiltersElement = document.querySelector('.map__filters');
const adFormSliderElement = document.querySelector('.ad-form__slider');
const mapElement = document.querySelector('.map__canvas');

function changeMapChildElementActivity(value) {
  const mapChildElements = mapElement.childNodes;
  mapChildElements.forEach((el) => {
    el.style.display = value;
  });
}

function changeFormElementsActivity(elementsArray, activity) {
  Object.values(elementsArray).forEach((value) => {
    value.disabled = activity;
  });
}

function changeMapFilterActivity(action, deactivationClassName, fieldsActivity) {
  addOrRemoveClassName(mapFiltersElement, action, deactivationClassName);
  changeFormElementsActivity(mapFiltersElement.children, fieldsActivity);
}

function changeAdFormActivity(action, deactivationClassName, fieldsActivity) {
  addOrRemoveClassName(adFormElement, action, deactivationClassName);
  changeFormElementsActivity(adFormElement.children, fieldsActivity);
}

function deactivateAdsPage() {
  changeMapChildElementActivity('none');
  adFormSliderElement.setAttribute('disabled', true);
  changeAdFormActivity('add', 'ad-form--disabled', true);
  changeMapFilterActivity('add', 'ad-form--disabled', true);
}

function activateAdsPage() {
  changeMapChildElementActivity('block');
  adFormSliderElement.removeAttribute('disabled');
  changeAdFormActivity('remove', 'ad-form--disabled', false);
  changeMapFilterActivity('remove', 'ad-form--disabled', false);
}

export {
  deactivateAdsPage,
  activateAdsPage
};

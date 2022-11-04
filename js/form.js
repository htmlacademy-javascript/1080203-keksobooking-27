import {addOrRemoveClassName} from './utils.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

function changeFormElementsActivity(elementsArray, activity) {
  Object.values(elementsArray).forEach((value) => {
    value.disabled = activity;
  });
}

function deactivateAdsPage() {
  addOrRemoveClassName(adForm, 'add', 'ad-form--disabled');
  changeFormElementsActivity(adForm.children, true);

  addOrRemoveClassName(mapFilters, 'add', 'ad-form--disabled');
  changeFormElementsActivity(mapFilters.children, true);
}

function activateAdsPage() {
  addOrRemoveClassName(adForm, 'remove', 'ad-form--disabled');
  changeFormElementsActivity(adForm.children, false);

  addOrRemoveClassName(mapFilters, 'remove', 'ad-form--disabled');
  changeFormElementsActivity(mapFilters.children, false);
}

export {deactivateAdsPage, activateAdsPage};

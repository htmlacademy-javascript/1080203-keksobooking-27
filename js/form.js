const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

function changeFormElementsActivity(elementsArray, activity) {
  Object.values(elementsArray).forEach((value) => {
    value.disabled = activity;
  });
}

function deactivateAdsPage() {
  adForm.classList.add('ad-form--disabled');
  changeFormElementsActivity(adForm.children, true);

  mapFilters.classList.add('ad-form--disabled');
  changeFormElementsActivity(mapFilters.children, true);
}

function activateAdsPage() {
  adForm.classList.remove('ad-form--disabled');
  changeFormElementsActivity(adForm.children, false);

  mapFilters.classList.remove('ad-form--disabled');
  changeFormElementsActivity(mapFilters.children, false);
}

export {deactivateAdsPage, activateAdsPage};

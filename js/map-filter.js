import {ADS_COUNT, FILTER_PRICE_VALUES, DEBOUNCE_TIMEOUT_DELAY} from './const.js';
import {markersLayer} from './map.js';
import {getData} from './api.js';
import {insertBalloonsOnMap} from './ads.js';
import {debounce} from './utils.js';

const mapFiltersElement = document.querySelector('.map__filters');
const housingTypeElement = mapFiltersElement.querySelector('#housing-type');
const housingPriceElement = mapFiltersElement.querySelector('#housing-price');
const housingRoomsElement = mapFiltersElement.querySelector('#housing-rooms');
const housingGuestsElement = mapFiltersElement.querySelector('#housing-guests');
const housingFeaturesElements = mapFiltersElement.querySelectorAll('#housing-features > input');

function filterAdByType(ad, type) {
  return type === 'any' || ad.offer.type === type;
}

function filterAdByPrice(ad, price) {
  switch (price) {
    case 'any':
      return true;
    case 'low':
      return ad.offer.price < FILTER_PRICE_VALUES.low;
    case 'middle':
      return ad.offer.price >= FILTER_PRICE_VALUES.low && ad.offer.price <= FILTER_PRICE_VALUES.high;
    case 'high':
      return ad.offer.price > FILTER_PRICE_VALUES.high;
  }
}

function filterAdByRoomsCount(ad, roomsCount) {
  return roomsCount === 'any' || ad.offer.rooms === Number(roomsCount);
}

function filterAdByGuestsCount(ad, guestsCount) {
  return guestsCount === 'any' || ad.offer.rooms === Number(guestsCount);
}

function filterAdByFeatures(ad, features) {
  if (!features.length) {
    return true;
  }

  if (!ad.offer.features) {
    return false;
  }

  return features.every((feature) => ad.offer.features.includes(feature));
}

function getSelectedFeatures(features) {
  const selectedFeaturesValues = [];
  Array.from(features).forEach((feature) => {
    if (feature.checked) {
      selectedFeaturesValues.push(feature.value);
    }
  });

  return selectedFeaturesValues;
}

function filterSimilarAdsNearby(ads) {
  const filteredAds = [];

  for (const ad of ads) {
    if (filteredAds.length >= ADS_COUNT) {
      break;
    }

    if (
      filterAdByType(ad, housingTypeElement.value) &&
      filterAdByPrice(ad, housingPriceElement.value) &&
      filterAdByRoomsCount(ad, housingRoomsElement.value) &&
      filterAdByGuestsCount(ad, housingGuestsElement.value) &&
      filterAdByFeatures(ad, getSelectedFeatures(housingFeaturesElements))
    ) {
      filteredAds.push(ad);
    }
  }
  return filteredAds;
}

mapFiltersElement.addEventListener('change', debounce(() => {
  markersLayer.clearLayers();
  getData(
    (ads) => {
      insertBalloonsOnMap(filterSimilarAdsNearby(ads));
    }
  );
}), DEBOUNCE_TIMEOUT_DELAY);

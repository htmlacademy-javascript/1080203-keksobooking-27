import {createMapBalloon, pinIcon} from './map.js';
import {HOUSING_TYPES} from './const.js';

const adsTemplateElement = document.querySelector('#card').content.querySelector('.popup');

function createAdFeatureTemplate(feature) {
  return `<li class="popup__feature popup__feature--${feature}"></li>`;
}

function createAdPhotoTemplate(photoSrc) {
  return `<img src="${photoSrc}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
}

function renderAdContentList(content, listDomElement, createTemplateAction) {
  if (!content) {
    listDomElement.classList.add('hidden');
    return;
  }
  listDomElement.classList.remove('hidden');
  listDomElement.textContent = '';
  content.forEach((el) => listDomElement.insertAdjacentHTML('beforeend', createTemplateAction(el)));
}

function isAdDescription(element, description) {
  if (!description) {
    element.querySelector('.popup__description').classList.add('hidden');
    return;
  }
  element.querySelector('.popup__description').classList.remove('hidden');
  return (element.querySelector('.popup__description').textContent = description);
}

function insertBalloonsOnMap(adsContent) {
  adsContent.forEach(({author, offer, location: {lat, lng}}) => {
    const adsElement = adsTemplateElement.cloneNode(true);
    const adFeatureListElement = adsElement.querySelector('.popup__features');
    const adPhotoListElement = adsElement.querySelector('.popup__photos');
    adsElement.querySelector('.popup__avatar').src = author.avatar;
    adsElement.querySelector('.popup__title').textContent = offer.title;
    adsElement.querySelector('.popup__text--address').textContent = offer.address;
    adsElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    adsElement.querySelector('.popup__type').textContent = HOUSING_TYPES[offer.type];
    adsElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    renderAdContentList(offer.features, adFeatureListElement, createAdFeatureTemplate);
    isAdDescription(adsElement, offer.description);
    renderAdContentList(offer.photos, adPhotoListElement, createAdPhotoTemplate);
    createMapBalloon(lat, lng, pinIcon, adsElement);
  });
}

export {insertBalloonsOnMap};

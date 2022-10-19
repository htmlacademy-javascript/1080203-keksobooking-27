import {createArrayOfSimilarAdsNearby} from './data.js';

function createHtmlOfSimilarAdsNearby(adsQuantity) {
  const arrayOfSimilarAdsNearby = createArrayOfSimilarAdsNearby(adsQuantity);
  const similarAdsNearbyTemplate = document.querySelector('#card').content.querySelector('.popup');
  const similarAdsNearbyFragment = document.createDocumentFragment();

  const housesTypesMap = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель'
  };

  for (let i = 0; i < arrayOfSimilarAdsNearby.length; i++) {
    const newSimilarAdNearby = similarAdsNearbyTemplate.cloneNode(true);

    newSimilarAdNearby.querySelector('.popup__title').textContent = arrayOfSimilarAdsNearby[i].offer.title;
    newSimilarAdNearby.querySelector('.popup__text--address').textContent = arrayOfSimilarAdsNearby[i].offer.address;
    newSimilarAdNearby.querySelector('.popup__text--price').textContent = `${arrayOfSimilarAdsNearby[i].offer.price} ₽/ночь`;

    newSimilarAdNearby.querySelector('.popup__text--capacity').textContent = `${arrayOfSimilarAdsNearby[i].offer.rooms} комнаты для ${arrayOfSimilarAdsNearby[i].offer.guests} гостей`;

    newSimilarAdNearby.querySelector('.popup__text--time').textContent = `Заезд после ${arrayOfSimilarAdsNearby[i].offer.rooms} , выезд до ${arrayOfSimilarAdsNearby[i].offer.guests}`;

    newSimilarAdNearby.querySelector('.popup__features').textContent = arrayOfSimilarAdsNearby[i].offer.features;

    if (arrayOfSimilarAdsNearby[i].offer.description) {
      newSimilarAdNearby.querySelector('.popup__description').textContent = arrayOfSimilarAdsNearby[i].offer.description;
    } else {
      newSimilarAdNearby.querySelector('.popup__description').style.display = 'none';
    }

    newSimilarAdNearby.querySelector('.popup__avatar').src = arrayOfSimilarAdsNearby[i].author.avatar;
    newSimilarAdNearby.querySelector('.popup__type').textContent = housesTypesMap[arrayOfSimilarAdsNearby[i].offer.type];

    const housePhotoImgTag = newSimilarAdNearby.querySelector('.popup__photos').firstElementChild;
    newSimilarAdNearby.querySelector('.popup__photos').innerHTML = '';
    for (let j = 0; j < arrayOfSimilarAdsNearby[i].offer.photos.length; j++) {
      const housePhoto = housePhotoImgTag.cloneNode(true);
      housePhoto.src = arrayOfSimilarAdsNearby[i].offer.photos[j];
      newSimilarAdNearby.querySelector('.popup__photos').appendChild(housePhoto);
    }

    similarAdsNearbyFragment.appendChild(newSimilarAdNearby);
  }
  return similarAdsNearbyFragment;
}

export {createHtmlOfSimilarAdsNearby};

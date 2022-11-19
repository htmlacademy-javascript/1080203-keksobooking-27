import {deactivateAdsPage, activateAdsPage} from './form-activity.js';

const CENTER_OF_TOKYO = {
  lat: 35.68323,
  lng: 139.75364
};

deactivateAdsPage();

function setInAddressFieldLatLng(fieldSelector, lat, lng) {
  document.querySelector(fieldSelector).value = `${lat}, ${lng}`;
}

const map = L.map('map-canvas')
  .on('load', () => {
    activateAdsPage();
    setInAddressFieldLatLng('#address', CENTER_OF_TOKYO.lat, CENTER_OF_TOKYO.lng);
  })
  .setView({
    lat: CENTER_OF_TOKYO.lat,
    lng: CENTER_OF_TOKYO.lng,
  }, 12);

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: CENTER_OF_TOKYO.lat,
    lng: CENTER_OF_TOKYO.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  setInAddressFieldLatLng('#address', evt.target.getLatLng().lat.toFixed(5), evt.target.getLatLng().lng.toFixed(5));
});

function createMapBalloon(lat, lng, icon, content) {
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(content);
}

export {createMapBalloon, pinIcon};


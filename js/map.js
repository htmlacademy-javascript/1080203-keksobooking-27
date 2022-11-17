import {deactivateAdsPage, activateAdsPage} from './form-activity.js';

deactivateAdsPage();

const map = L.map('map-canvas')
  .on('load', () => {
    activateAdsPage();
  })
  .setView({
    lat: 35.68323494144002,
    lng: 139.75364685058597,
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
    lat: 35.6971769911219,
    lng: 139.74540710449222,
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
  document.querySelector('#address').value = `${evt.target.getLatLng().lat}, ${evt.target.getLatLng().lng}`;
});

function createMapBaloon(lat, lng, icon, content) {
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

export {createMapBaloon, pinIcon};


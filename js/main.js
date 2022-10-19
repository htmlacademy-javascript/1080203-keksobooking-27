import {createHtmlOfSimilarAdsNearby} from './adsGenerator.js';

const similarAdsNearby = createHtmlOfSimilarAdsNearby(10);

document.querySelector('#map-canvas').appendChild(similarAdsNearby);

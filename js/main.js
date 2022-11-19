import {createArrayOfSimilarAdsNearby} from './data.js';
import {insertBalloonsOnMap} from './ads.js';
import './form-validate.js';
import './map.js';
import './form-slider.js';

const ads = createArrayOfSimilarAdsNearby(10);

insertBalloonsOnMap(ads);


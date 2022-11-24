import './api.js';
import './form-validate.js';
import './form-slider.js';
import './map.js';
import './map-filter.js';
import {getData} from './api.js';
import {deactivateAdsPage, activateAdsPage} from './form-activity.js';
import {insertBalloonsOnMap} from './ads.js';
import {sendAdFormData} from './form-validate.js';
import {ADS_COUNT} from './const.js';

deactivateAdsPage();
getData(
  (ads) => {
    activateAdsPage();
    insertBalloonsOnMap(ads.slice(0, ADS_COUNT));
  }
);

sendAdFormData();

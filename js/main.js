import './api.js';
import './form-validate.js';
import './form-slider.js';
import './map.js';
import {getData} from './api.js';
import {deactivateAdsPage, activateAdsPage} from './form-activity.js';
import {insertBalloonsOnMap} from './ads.js';
import {sendAdFormData} from './form-validate.js';

deactivateAdsPage();
getData(
  (ads) => {
    activateAdsPage();
    insertBalloonsOnMap(ads);
  }
);

sendAdFormData();

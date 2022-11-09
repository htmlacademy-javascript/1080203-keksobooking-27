import {createArrayOfSimilarAdsNearby} from './data.js';
import {renderArrAdsContentData} from './ads.js';
import {deactivateAdsPage, activateAdsPage} from './form-activity.js';
import './form-validate.js';

const ads = createArrayOfSimilarAdsNearby(1);

renderArrAdsContentData(ads);

deactivateAdsPage();
activateAdsPage();


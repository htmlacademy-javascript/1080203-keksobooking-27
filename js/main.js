import {createArrayOfSimilarAdsNearby} from './data.js';
import {renderArrAdsContentData} from './ads.js';

const ads = createArrayOfSimilarAdsNearby(1);

renderArrAdsContentData(ads);

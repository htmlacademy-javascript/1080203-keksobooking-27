import {insertBalloonsOnMap} from './ads.js';
import {createMessageContainer} from './utils.js';
import {changeActivtyAdFormSubmitBtn} from './form-validate.js';
import {changeMapFilterActivity} from './form-activity.js';
import {showAdFormPopup} from './form-popup.js';
import {SHOW_MESSAGE_CONTAINER_DURATION} from './const.js';

fetch('https://27.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Не удалось загрузить похожие объявления');
    }
    return response.json();
  })
  .then((ads) => {
    insertBalloonsOnMap(ads);
  })
  .catch(() => {
    changeMapFilterActivity('add', 'ad-form--disabled', true);
    createMessageContainer('error', 'Не удалось загрузить похожие объявления', SHOW_MESSAGE_CONTAINER_DURATION);
  });

function sendAdFormData(body) {
  changeActivtyAdFormSubmitBtn(false);
  fetch('https://27.javascript.pages.academy/keksobooking', {method: 'POST', body})
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось отправить форму');
      }
      showAdFormPopup('success');
    })
    .catch(() => {
      showAdFormPopup('error');
    });
}

export {sendAdFormData};

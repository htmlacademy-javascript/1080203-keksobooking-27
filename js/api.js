import {createMessageContainer} from './utils.js';
import {SHOW_MESSAGE_CONTAINER_DURATION} from './const.js';

function getErrorAction() {
  createMessageContainer('error', 'Не удалось загрузить похожие объявления', SHOW_MESSAGE_CONTAINER_DURATION);
}

function getData(onSuccess) {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (!response.ok) {
        getErrorAction();
        return;
      }
      return response.json();
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      getErrorAction();
    });
}

function sendData(onSuccess, onFail, body) {
  fetch('https://27.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body
  })
    .then((response) => {
      if (!response.ok) {
        onFail();
        return;
      }
      onSuccess();
    })
    .catch(() => {
      onFail();
    });
}

export {
  getData,
  sendData
};

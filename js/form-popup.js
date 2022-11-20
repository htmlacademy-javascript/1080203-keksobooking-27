import {resetAdForm} from './form-reset.js';
import {changeActivtyAdFormSubmitBtn} from './form-validate.js';

function hideAdFormPopup(evt) {
  const errorPopup = document.querySelector('.error');
  const successPopup = document.querySelector('.success');

  if (evt.type === 'click' || (evt.type === 'keydown' && evt.key === 'Escape')) {
    if (errorPopup) {
      document.querySelector('body').removeChild(errorPopup);
      errorPopup.removeEventListener('click', hideAdFormPopup);
      if (evt.key === 'Escape') {
        window.removeEventListener('keydown', hideAdFormPopup);
      }
    }
    if (successPopup) {
      document.querySelector('body').removeChild(successPopup);
      successPopup.removeEventListener('click', hideAdFormPopup);
      if (evt.key === 'Escape') {
        window.removeEventListener('keydown', hideAdFormPopup);
      }
      resetAdForm();
    }
    changeActivtyAdFormSubmitBtn(true);
  }
}

function showAdFormPopup(type) {
  const adFormPopupTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const adFormPopupElement = adFormPopupTemplate.cloneNode(true);
  document.querySelector('body').append(adFormPopupElement);
  adFormPopupElement.addEventListener('click', hideAdFormPopup);
  window.addEventListener('keydown', hideAdFormPopup);
}

export {showAdFormPopup};

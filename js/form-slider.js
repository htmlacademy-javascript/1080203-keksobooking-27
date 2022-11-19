import {pristine, adForm, housingPrice, MAX_HOUSING_PRICE} from './form-validate.js';

const housingPriceSlider = adForm.querySelector('.ad-form__slider');

noUiSlider.create(housingPriceSlider, {
  range: {
    min: 0,
    max: MAX_HOUSING_PRICE,
  },
  start: 1000,
  step: 1,
  connect: 'lower',
});

housingPriceSlider.noUiSlider.on('update', () => {
  housingPrice.value = Number(housingPriceSlider.noUiSlider.get()).toFixed(0);
  pristine.validate(housingPrice);
});

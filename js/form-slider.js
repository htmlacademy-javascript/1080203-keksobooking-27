import {pristine, adForm, housingPrice} from './form-validate.js';

const housingPriceSlider = adForm.querySelector('.ad-form__slider');

noUiSlider.create(housingPriceSlider, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 3000,
  step: 1,
  connect: 'lower',
});

housingPriceSlider.noUiSlider.on('update', () => {
  housingPrice.value = Number(housingPriceSlider.noUiSlider.get()).toFixed(0);
  pristine.validate(housingPrice);
});

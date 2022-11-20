import {pristine, adForm, housingPrice, housingType} from './form-validate.js';
import {MAX_HOUSING_PRICE, MIN_PRICE_BY_HOUSING_TYPE} from './const.js';

const housingPriceSlider = adForm.querySelector('.ad-form__slider');

noUiSlider.create(housingPriceSlider, {
  range: {
    min: 0,
    max: MAX_HOUSING_PRICE,
  },
  start: MIN_PRICE_BY_HOUSING_TYPE[housingType.value],
  step: 1,
  connect: 'lower',
});

housingPriceSlider.noUiSlider.on('update', () => {
  housingPrice.value = Number(housingPriceSlider.noUiSlider.get()).toFixed(0);
  pristine.validate(housingPrice);
});

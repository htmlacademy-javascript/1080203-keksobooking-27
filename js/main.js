function getIntegerNumber(min, max) {

  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getIntegerNumber(5, 10);


function getFloatNumber(min, max, decimalPlaces) {

  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }

  return +(Math.random() * (max - min + 1) + min).toFixed(decimalPlaces);
}
getFloatNumber(1.5, 10.9, 1);

function getRandomPositiveIntegerNumber(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloatNumber(min, max, decimalPlaces = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));

  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(decimalPlaces);
}

function addOrRemoveClassName(element, method, className) {
  element.classList[method](className);
}

function getMaxNumberInArray(numberArray) {
  let maxNumber = numberArray[0];
  numberArray.forEach((number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
}

function isFieldEmpty(field) {
  return field.value === '';
}

function changeSelectedOption(value, options) {
  for (let i = 0; i < options.children.length; i++) {
    options.children[i].removeAttribute('selected');
    if (value === options.children[i].value) {
      options.children[i].setAttribute('selected', true);
    }
  }
}

export {
  getRandomPositiveIntegerNumber,
  getRandomPositiveFloatNumber,
  addOrRemoveClassName,
  getMaxNumberInArray,
  isFieldEmpty,
  changeSelectedOption
};

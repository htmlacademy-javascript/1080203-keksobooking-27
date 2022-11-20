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

function changeSelectValue(value, options) {
  for (let i = 0; i < options.children.length; i++) {
    if (value === options.children[i].value) {
      options.value = value;
    }
  }
}

function createMessageStyles(container, type, message) {
  container.style.zIndex = '10000';
  container.style.position = 'fixed';
  container.style.borderRadius = '20px';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.bottom = '50px';
  container.style.right = '50px';
  container.style.padding = '30px';
  container.style.fontSize = '16px';
  container.style.fontFamily = 'Roboto';
  container.style.fontWeight = '400';
  container.style.color = 'white';
  container.style.width = '400px';
  container.style.height = '100px';
  container.style.minHeight = '100px';
  container.style.margin = '0 auto';
  container.textContent = message;
  switch (type) {
    case 'success':
      container.style.backgroundColor = 'yellowgreen';
      break;
    case 'error':
      container.style.backgroundColor = 'coral';
      break;
  }
}

function createMessageContainer(type, message, duration) {
  const alertContainer = document.createElement('div');
  createMessageStyles(alertContainer, type, message);
  document.body.append(alertContainer);
  setTimeout(() => {
    document.body.removeChild(alertContainer);
  }, duration);
}

export {
  getRandomPositiveIntegerNumber,
  getRandomPositiveFloatNumber,
  addOrRemoveClassName,
  getMaxNumberInArray,
  isFieldEmpty,
  changeSelectValue,
  createMessageContainer
};

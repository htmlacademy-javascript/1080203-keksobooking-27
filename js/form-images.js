import {FILE_TYPES, DEFAULT_AVATAR_FILE_PATH} from './const.js';

const avatarChooserElement = document.querySelector('#avatar');
const avatarPreviewElement = document.querySelector('.ad-form-header__preview > img');
const houseImageChooserElement = document.querySelector('#images');
const houseImagePreviewBox = document.querySelector('.ad-form__photo');

const isImageTypeCorrect = (fileName, types) => types.some((imageType) => fileName.endsWith(imageType));

const setPreviewImageSrc = (element, file) => {
  element.src = URL.createObjectURL(file);
};

const setDefaultAvatar = () => {
  avatarPreviewElement.src = DEFAULT_AVATAR_FILE_PATH;
};

avatarChooserElement.addEventListener('change', () => {
  const avatarFile = avatarChooserElement.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();

  if (isImageTypeCorrect(avatarFileName, FILE_TYPES)) {
    setPreviewImageSrc(avatarPreviewElement, avatarFile);
  }
});

houseImageChooserElement.addEventListener('change', () => {
  const houseImageFile = houseImageChooserElement.files[0];
  const houseImageFileName = houseImageFile.name.toLowerCase();

  if (isImageTypeCorrect(houseImageFileName, FILE_TYPES)) {
    houseImagePreviewBox.innerHTML = '';

    const houseImagePreviewElement = document.createElement('img');

    setPreviewImageSrc(houseImagePreviewElement, houseImageFile);

    houseImagePreviewElement.style.maxWidth = '100%';
    houseImagePreviewElement.style.height = 'auto';

    houseImagePreviewBox.append(houseImagePreviewElement);
  }
});

export {setDefaultAvatar};

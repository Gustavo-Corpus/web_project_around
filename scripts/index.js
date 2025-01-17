import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileName = document.querySelector(".profile__info-title");
const profileJob = document.querySelector(".profile__info-subtitle");
const editButton = document.querySelector(".button-icon");
const popupEdit = document.querySelector(".popup_edit");
const popupEditClose = popupEdit.querySelector(".popup__close");
const formEdit = document.querySelector("#edit_form");
const nameInput = formEdit.querySelector(".popup__input-name");
const jobInput = formEdit.querySelector(".popup__input-job");

const addButton = document.querySelector(".button-add");
const popupAdd = document.querySelector(".popup_add");
const popupAddClose = popupAdd.querySelector(".popup__close");
const formAdd = document.querySelector("#add_form");
const titleInput = formAdd.querySelector(".popup__input-title");
const linkInput = formAdd.querySelector(".popup__input-link");
const elementsContainer = document.querySelector(".elements");

const popupImage = document.querySelector(".popup_image");
const popupImageClose = popupImage.querySelector(".popup__close");
const popupImageElement = popupImage.querySelector(".popup__image");
const imagePopupDescription = popupImage.querySelector(
  ".popup__image-description"
);

const editFormValidator = new FormValidator(validationConfig, formEdit);
const addFormValidator = new FormValidator(validationConfig, formAdd);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const initialCards = [
  {
    name: "Playa de Cancún",
    link: "https://i.pinimg.com/originals/c9/93/18/c9931856afde12443dea23bf62daf2a6.jpg",
  },
  {
    name: "Ruinas de Xilitla",
    link: "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/09/Castillo-Edward-James-San-Luis.jpg?w=1400&ssl=1",
  },
  {
    name: "Cascadas de Tamul",
    link: "https://rinconesdemexico.com/wp-content/uploads/shutterstock_1344278147.jpg",
  },
  {
    name: "Real de Catorce",
    link: "https://elsouvenir.com/wp-content/uploads/2020/11/Real-de-Catorce-San-Luis-Potosi.-Foto_-Oscar-Daniel-Fotografia.jpg",
  },
  {
    name: "Grutas de Tolantongo",
    link: "https://grutastolantongo.com.mx/img/atractivos/pozas/pozas.jpg",
  },
  {
    name: "Arco del Cabo San Lucas",
    link: "https://scontent.fpbc2-2.fna.fbcdn.net/v/t39.30808-6/453746946_470618489107322_7851060148051585929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eZlXH2zXNo8Q7kNvgGl9lvP&_nc_zt=23&_nc_ht=scontent.fpbc2-2.fna&_nc_gid=Ae4hHGDRqZMyLOyLNvwUaYK&oh=00_AYCvlWn4UMnAdMh8ia8Buo3QkVX3Mr2mzRfqKxjl7i85SQ&oe=678F512F",
  },
];

function createCard(data) {
  const card = new Card(data, "#card-template");
  return card.generateCard();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };
  const cardElement = createCard(cardData);
  elementsContainer.prepend(cardElement);
  closePopup(popupAdd);
  evt.target.reset();
}

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
});
popupEditClose.addEventListener("click", () => closePopup(popupEdit));
formEdit.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", () => openPopup(popupAdd));
popupAddClose.addEventListener("click", () => closePopup(popupAdd));
formAdd.addEventListener("submit", handleAddCardFormSubmit);

popupImageClose.addEventListener("click", () => closePopup(popupImage));

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  elementsContainer.append(cardElement);
});

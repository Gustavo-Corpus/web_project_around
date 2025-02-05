// Imports de componentes
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// Imports de utilidades
import { initialCards } from "../utils/initialCards.js";
import { validationConfig, settings } from "../utils/config.js";
import {
  selectors,
  profileSelectors,
  popupSelectors,
  cardSelectors,
  forms,
  editProfileElements,
  addCardElements,
} from "../utils/constants.js";

// Instancia de UserInfo
const userInfo = new UserInfo({
  nameSelector: profileSelectors.nameElement,
  jobSelector: profileSelectors.jobElement,
});

// Instancia de PopupWithImage
const imagePopup = new PopupWithImage(popupSelectors.imagePopup);
imagePopup.setEventListeners();

// Función para crear una nueva tarjeta
const createCard = (data) => {
  const card = new Card(data, cardSelectors.template, (name, link) => {
    imagePopup.open(name, link);
  });
  return card.generateCard();
};

// Instancia de Section para las tarjetas iniciales
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  cardSelectors.container
);

// Renderizar tarjetas iniciales
cardSection.renderItems();

// PopupWithForm para editar perfil
const editProfilePopup = new PopupWithForm(
  popupSelectors.editPopup,
  (formData) => {
    userInfo.setUserInfo({
      name: formData.name,
      job: formData.job,
    });
    editProfilePopup.close();
  }
);
editProfilePopup.setEventListeners();

// PopupWithForm para agregar tarjeta
const addCardPopup = new PopupWithForm(popupSelectors.addPopup, (formData) => {
  const cardElement = createCard({
    name: formData.title,
    link: formData.link,
  });
  cardSection.addItem(cardElement);
  addCardPopup.close();
});
addCardPopup.setEventListeners();

// Event listeners para los botones de editar perfil y agregar tarjeta
document
  .querySelector(profileSelectors.editButton)
  .addEventListener("click", () => {
    const currentUserInfo = userInfo.getUserInfo();
    editProfileElements.nameInput.value = currentUserInfo.name;
    editProfileElements.jobInput.value = currentUserInfo.job;
    editProfilePopup.open();
  });

document
  .querySelector(profileSelectors.addButton)
  .addEventListener("click", () => {
    addCardPopup.open();
  });

// Validación de formularios
const editFormValidator = new FormValidator(validationConfig, forms.editForm);
const addFormValidator = new FormValidator(validationConfig, forms.addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

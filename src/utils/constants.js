export const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const profileSelectors = {
  nameElement: ".profile__info-title",
  jobElement: ".profile__info-subtitle",
  editButton: ".button-icon",
  addButton: ".button-add",
};

export const popupSelectors = {
  editPopup: ".popup_edit",
  addPopup: ".popup_add",
  imagePopup: ".popup_image",
  editForm: "#edit_form",
  addForm: "#add_form",
  nameInput: ".popup__input-name",
  jobInput: ".popup__input-job",
};

export const cardSelectors = {
  template: "#card-template",
  container: ".elements",
};

export const forms = {
  editForm: document.querySelector("#edit_form"),
  addForm: document.querySelector("#add_form"),
};

export const editProfileElements = {
  form: forms.editForm,
  nameInput: document.querySelector(".popup__input-name"),
  jobInput: document.querySelector(".popup__input-job"),
  submitButton: document.querySelector(".popup__button"),
};

export const addCardElements = {
  form: forms.addForm,
  titleInput: document.querySelector(".popup__input-title"),
  linkInput: document.querySelector(".popup__input-link"),
  submitButton: document.querySelector(".popup__button"),
};

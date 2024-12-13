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

const popupImage = document.querySelector(".popup_image");
const popupImageElement = popupImage.querySelector(".popup__image");
const imagePopupDescription = popupImage.querySelector(
  ".popup__image-description"
);
const popupImageClose = popupImage.querySelector(".popup__close");

const cardTemplate = document.querySelector("#card-template").content;
const elementsContainer = document.querySelector(".elements");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function initialCard(cardData) {
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__item-image");
  const cardTitle = cardElement.querySelector(".elements__item-title");
  const likeButton = cardElement.querySelector(".elements__item-button");
  const deleteButton = cardElement.querySelector(".elements__delete");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener("click", function () {
    popupImageElement.src = cardData.link;
    popupImageElement.alt = cardData.name;
    imagePopupDescription.textContent = cardData.name;
    openPopup(popupImage);
  });

  likeButton.addEventListener("click", function (evt) {
    const likeImage = evt.currentTarget.querySelector(".elements__item-like");
    if (likeImage.src.includes("like.svg")) {
      likeImage.src = "images/like-active.svg";
    } else {
      likeImage.src = "images/like.svg";
    }
  });

  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

function loadInitialCards() {
  initialCards.forEach((cardData) => {
    const card = initialCard(cardData);
    elementsContainer.append(card);
  });
}

document.addEventListener("DOMContentLoaded", loadInitialCards);

function openPopup(popup) {
  if (popup.classList.contains("popup_image")) {
    popup.classList.add("popup_image_opened");
  } else {
    popup.classList.add("popup_opened");
  }
}

function closePopup(popup) {
  if (popup.classList.contains("popup_image")) {
    popup.classList.remove("popup_image_opened");
  } else {
    popup.classList.remove("popup_opened");
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function createCard(title, link) {
  const cardElementadd = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);

  const cardImage = cardElementadd.querySelector(".elements__item-image");
  const cardTitle = cardElementadd.querySelector(".elements__item-title");
  const likeButton = cardElementadd.querySelector(".elements__item-button");
  const deleteButton = cardElementadd.querySelector(".elements__delete");

  cardImage.src = link;
  cardImage.alt = title;
  cardTitle.textContent = title;

  cardImage.addEventListener("click", function () {
    popupImageElement.src = link;
    popupImageElement.alt = title;
    imagePopupDescription.textContent = title;
    openPopup(popupImage);
  });

  likeButton.addEventListener("click", function (evt) {
    const likeImage = evt.currentTarget.querySelector(".elements__item-like");
    if (likeImage.src.includes("like.svg")) {
      likeImage.src = "images/like-active.svg";
    } else {
      likeImage.src = "images/like.svg";
    }
  });

  deleteButton.addEventListener("click", function () {
    cardElementadd.remove();
  });

  return cardElementadd;
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const card = createCard(titleInput.value, linkInput.value);
  elementsContainer.prepend(card);
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

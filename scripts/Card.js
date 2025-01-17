import { openPopup } from "./utils.js";

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__item-button")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });

    this._element
      .querySelector(".elements__delete")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });

    this._element
      .querySelector(".elements__item-image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });
  }

  _handleLikeClick() {
    const likeImage = this._element.querySelector(".elements__item-like");
    if (likeImage.src.includes("like.svg")) {
      likeImage.src = "images/like-active.svg";
    } else {
      likeImage.src = "images/like.svg";
    }
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  _handleImageClick() {
    const popupImage = document.querySelector(".popup_image");
    const popupImageElement = popupImage.querySelector(".popup__image");
    const imagePopupDescription = popupImage.querySelector(
      ".popup__image-description"
    );

    popupImageElement.src = this._link;
    popupImageElement.alt = this._name;
    imagePopupDescription.textContent = this._name;

    openPopup(popupImage);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".elements__item-image");
    const cardTitle = this._element.querySelector(".elements__item-title");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return this._element;
  }
}

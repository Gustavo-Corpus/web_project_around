import { settings } from "../utils/config.js";

export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".elements__item-button");
    this._deleteButton = this._element.querySelector(".elements__delete");
    this._cardImage = this._element.querySelector(".elements__item-image");

    this._likeButton.addEventListener("click", () => this._handleLikeClick());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick()
    );
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  _handleLikeClick() {
    const likeImage = this._element.querySelector(".elements__item-like");
    if (likeImage.src.includes("like.svg")) {
      likeImage.src = settings.cardLikeActiveImage;
    } else {
      likeImage.src = settings.cardLikeInactiveImage;
    }
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
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

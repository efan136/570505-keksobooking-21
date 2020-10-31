'use strict';
(function () {

  let mapFilterContainer = document.querySelector('.map__filters-container');
  let map = document.querySelector('.map');
  let pinCardTemplate = document.querySelector('#card').content.querySelector('.map__card');

  window.drawCard = function (serverData) {

    let renderCard = function () {
      let pinCardElement = pinCardTemplate.cloneNode(true);
      pinCardElement.querySelector('.popup__title').textContent = serverData.offer.title;
      pinCardElement.querySelector('.popup__text--address').textContent = serverData.offer.address;
      pinCardElement.querySelector('.popup__text--price').textContent = serverData.offer.price + ' / ' + 'ночь';
      pinCardElement.querySelector('.popup__type').textContent = serverData.offer.type;
      pinCardElement.querySelector('.popup__text--capacity').textContent = serverData.offer.rooms + ' комнат для ' + serverData.offer.guests + ' гостей';
      pinCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + serverData.offer.checkin + ', выезд до ' + serverData.offer.checkout;

      let renderCardFeatures = function () {
        pinCardElement.querySelector('.popup__features').innerHTML = '';
        for (let i = 0; i <= serverData.offer.features.length - 1; i++) {
          let featureElement = document.createElement('li');
          featureElement.classList.add('popup__feature');
          featureElement.classList.add('popup__feature--' + serverData.offer.features[i]);
          pinCardElement.querySelector('.popup__features').appendChild(featureElement);
        }
      };
      renderCardFeatures();

      pinCardElement.querySelector('.popup__description').textContent = serverData.offer.description;

      let renderCardPhotos = function () {
        pinCardElement.querySelector('.popup__photo').src = serverData.offer.photos[0];
        for (let i = 1; i < serverData.offer.photos.length; i++) {
          let popUpPhotoElement = pinCardElement.querySelector('.popup__photo').cloneNode(true);
          popUpPhotoElement.src = serverData.offer.photos[i];
          pinCardElement.querySelector('.popup__photos').appendChild(popUpPhotoElement);
        }
      };
      renderCardPhotos();

      pinCardElement.querySelector('.popup__avatar').src = serverData.author.avatar;
      return pinCardElement;
    };

    let fragment = document.createDocumentFragment();
    fragment.appendChild(renderCard());

    if (document.querySelector('.popup')) {
      map.removeChild(document.querySelector('.popup'));
      map.insertBefore(fragment, mapFilterContainer);
    } else {
      map.insertBefore(fragment, mapFilterContainer);
    }

    let PinCard = document.querySelector('.popup');
    let closePinCardBtn = document.querySelector('.popup__close');


    let onPinCardEscPress = function (evt) {
      if (evt.key === 'Escape') {
        closePinCard();
      }
    };

    let closePinCard = function () {

      map.removeChild(PinCard);
      document.removeEventListener('keydown', onPinCardEscPress);
    };

    closePinCardBtn.addEventListener('click', function () {
      closePinCard();
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.key === "Escape") {
        closePinCard();
      }
    });
  };
})();

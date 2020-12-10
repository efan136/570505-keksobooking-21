
'use strict';
(function () {
  let mapFilter = document.querySelector('.map__filters');
  let housingType = document.querySelector('#housing-type');
  let housingPrice = document.querySelector('#housing-price');
  let housingRooms = document.querySelector('#housing-rooms');
  let housingGuests = document.querySelector('#housing-guests');
  let husingFeatures = document.querySelectorAll('#housing-features input');

  let updatePins = function () {
    window.filtredPins = window.serverData;
    let filtredByType = function (data) {
      if (housingType.value !== 'any') {
        let filterType = data.filter(function (newPin) {
          return newPin.offer.type === housingType.value;
        });
        window.filtredPins = filterType;
      }
    };

    let filtredByPrice = function (data) {
      if (housingPrice.value !== 'any') {
        let priceFilter = data.filter(function (newPin) {
          let acommodationPrice;
          if (newPin.offer.price < 10000) {
            acommodationPrice = "low";
          } else if (newPin.offer.price > 10000 && newPin.offer.price < 50000) {
            acommodationPrice = "middle";
          } else if (newPin.offer.price >= 50000) {
            acommodationPrice = "high";
          }
          return acommodationPrice === housingPrice.value;
        });
        window.filtredPins = priceFilter;
      }
    };
    let filtredByRooms = function (data) {
      if (housingRooms.value !== 'any') {
        let roomFilter = data.filter(function (newPin) {
          return newPin.offer.rooms + '' === housingRooms.value;
        });
        window.filtredPins = roomFilter;
      }
    };

    let filtredByGuests = function (data) {
      if (housingGuests.value !== 'any') {
        let guestFilter = data.filter(function (newPin) {
          return newPin.offer.guests + '' === housingGuests.value;
        });
        window.filtredPins = guestFilter;
      }
    };

    let filtredByFeatures = function () {
      for (let i = 0; i < husingFeatures.length; i++) {
        if (husingFeatures[i].checked) {
          let featuresFilter = window.filtredPins.filter(function (newPin) {
            return newPin.offer.features[i] === husingFeatures[i].value;
          });
          window.filtredPins = featuresFilter;
        }
      }
    };

    filtredByType(window.filtredPins);
    filtredByPrice(window.filtredPins);
    filtredByRooms(window.filtredPins);
    filtredByGuests(window.filtredPins);
    filtredByFeatures(window.filtredPins);
    window.drawPins(window.filtredPins);
  };

  let updateMap = function () {
    let pinCard = document.querySelector('.popup');
    if (window.mainMap.contains(pinCard)) {
      window.pinCards.closePinCard();
    }
    window.pins.removePins();
    updatePins();
  };

  mapFilter.addEventListener('change', function () {
    window.debounce(updateMap);
  });
})();

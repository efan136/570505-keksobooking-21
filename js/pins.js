'use strict';
(function () {
  window.mainPin = document.querySelector(".map__pin--main");
  const mainPinX = '570px';
  const mainPinY = '375px';
  window.serverData = [];
  window.filtredData = [];

  let pinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");
  let mapPins = document.querySelector(".map__pins");
  let housingType = document.querySelector('#housing-type');
  const MAIN_PIN_ARROW_HEIGHT = 22;
  const MAX_PINS_ON_MAP = 5;
  window.mainPinStartY = Math.round(window.mainPin.offsetHeight + MAIN_PIN_ARROW_HEIGHT);
  window.mainPinStartX = Math.round(window.mainPin.offsetWidth / 2);

  window.mainPinResetPosition = function () {
    window.mainPin.style.left = mainPinX;
    window.mainPin.style.top = mainPinY;
  };

  let removePins = function () {
    let drawnPins = document.querySelectorAll('.map__pin');
    for (let i = drawnPins.length - 1; i >= 1; i--) {
      mapPins.removeChild(drawnPins[i]);
    }
  };


  window.pins = {
    removePins: removePins
  };

  let sliceServerData = function (data) {
    if (data.length > MAX_PINS_ON_MAP) {
      return data.slice(0, MAX_PINS_ON_MAP);
    } else {
      return data;
    }
  };

  let drawPins = function (data) {
    let slicedData = sliceServerData(data);
    for (let i = 0; i < slicedData.length; i++) {
      let pinElement = pinTemplate.cloneNode(true);
      pinElement.querySelector("img").src = slicedData[i].author.avatar;
      pinElement.querySelector("img").alt = slicedData[i].author.title;
      pinElement.style.left = slicedData[i].location.x + "px";
      pinElement.style.top = slicedData[i].location.y + "px";
      mapPins.appendChild(pinElement);
    }
  };

  window.successHandler = function (data) {
    window.serverData = data;
    drawPins(data);
    window.filtredData = window.serverData;
  };

  let updatePins = function () {
    window.filtredData = window.serverData.filter(function (newPin) {
      return newPin.offer.type === housingType.value;
    });
    window.pins.removePins();
    drawPins(window.filtredData);
  };

  housingType.addEventListener('change', function () {
    if (housingType.value === 'any') {
      window.pins.removePins();
      window.filtredData = window.serverData;

      drawPins(window.filtredData);
    } else {
      updatePins();
    }
  });

  window.errorHandler = function (errorMessage) {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  mapPins.addEventListener('click', function (evt) {
    let drawnMapPins = document.querySelectorAll('.map__pin');
    let drawnMapPinsImg = document.querySelectorAll('.map__pin img');
    for (let i = 1; i <= drawnMapPins.length; i++) {
      if (drawnMapPins[i] === evt.target || drawnMapPinsImg[i] === evt.target) {
        window.drawCard(window.filtredData[i - 1]);
      }
    }
  });
})();

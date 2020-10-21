'use strict';
(function () {
  let pinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");
  let mapPins = document.querySelector(".map__pins");
  let housingType = document.querySelector('#housing-type');
  let serverData = [];
  const MAX_PINS_ON_MAP = 5;

  let removePins = function () {
    let drawnPins = document.querySelectorAll('.map__pin');
    for (let i = drawnPins.length - 1; i >= 1; i--) {
      mapPins.removeChild(drawnPins[i]);
    }
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
    serverData = data;
    drawPins(data);
  };

  let updatePins = function () {
    let sameTypeAccommodation = serverData.filter(function (newPin) {
      return newPin.offer.type === housingType.value;
    });
    removePins();
    drawPins(sameTypeAccommodation);
  };


  housingType.addEventListener('change', function () {
    if (housingType.value === 'any') {
      removePins();
      drawPins(serverData);
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
})();

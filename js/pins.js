'use strict';
(function () {
  let pinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");
  let mapPins = document.querySelector(".map__pins");

  let drawPins = function () {
    for (let i = 0; i <= 7; i++) {
      let pinElement = pinTemplate.cloneNode(true);
      pinElement.querySelector("img").src = window.data.generateArr()[i].author.avatar;
      pinElement.querySelector("img").alt = window.data.generateArr()[i].author.title;
      pinElement.style.left = window.data.generateArr()[i].location.x + "px";
      pinElement.style.top = window.data.generateArr()[i].location.y + (30 + i * 40) + "px";
      mapPins.appendChild(pinElement);
    }
  };
  window.pins = {
    drawPins: drawPins
  };
})();

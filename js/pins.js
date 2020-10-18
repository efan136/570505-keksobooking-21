'use strict';
(function () {
  let pinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");
  let mapPins = document.querySelector(".map__pins");
  const pinsLength = 7;

  window.successHandler = function (serverData) {
    for (let i = 0; i <= pinsLength; i++) {
      let pinElement = pinTemplate.cloneNode(true);
      pinElement.querySelector("img").src = serverData[i].author.avatar;
      pinElement.querySelector("img").alt = serverData[i].author.title;
      pinElement.style.left = serverData[i].location.x + "px";
      pinElement.style.top = serverData[i].location.y + "px";
      mapPins.appendChild(pinElement);
    }
  };

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


'use strict';
(function () {
  window.mainMap = document.querySelector(".map");
  window.mainPin = document.querySelector(".map__pin--main");
  let addInformationForm = document.querySelector(".ad-form");
  let onMainPinEnterPress = function (evt) {
    window.util.isEnterEvent(evt, window.map.activateMap);
  };

  let activateMap = function () {
    window.mainMap.classList.remove("map--faded");
    addInformationForm.classList.remove("ad-form--disabled");
    window.mainPin.removeEventListener('keydown', onMainPinEnterPress);
  };

  let disableMap = function () {
    window.mainMap.classList.add("map--faded");
    addInformationForm.classList.add("ad-form--disabled");
  };

  window.map = {
    activateMap: activateMap,
    disableMap: disableMap
  };
})();

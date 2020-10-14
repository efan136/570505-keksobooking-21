
'use strict';
(function () {
  let map = document.querySelector(".map");
  let mapPinMain = document.querySelector(".map__pin--main");
  let addInformationForm = document.querySelector(".ad-form");
  let onMainPinEnterPress = function (evt) {
    window.util.isEnterEvent(evt, window.map.activateMap);
  };

  let activateMap = function () {
    map.classList.remove("map--faded");
    addInformationForm.classList.remove("ad-form--disabled");
    mapPinMain.removeEventListener('keydown', onMainPinEnterPress);
  };

  window.map = {
    activateMap: activateMap
  };
})();

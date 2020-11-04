
'use strict';
(function () {
  let addressField = document.querySelector("#address");
  let roomNumber = document.querySelector("#room_number");
  let guestNumber = document.querySelector("#capacity");

  let disableForm = function (arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i].disabled = true;
    }
  };

  let fillAddressFieldDisabled = function () {
    addressField.value = Math.round(window.mainPin.offsetTop + (window.mainPin.offsetHeight / 2)) + "," + Math.round(window.mainPin.offsetLeft + (window.mainPin.offsetWidth / 2));
  };

  let activateForm = function (arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i].disabled = false;
    }
  };

  let fillAddressFieldActive = function () {
    let mainPinCurrentY = Math.round(window.mainPin.offsetTop + window.mainPinStartY);
    let mainPinCurrentX = Math.round(window.mainPin.offsetLeft + window.mainPinStartX);
    addressField.value = mainPinCurrentY + "," + mainPinCurrentX;
  };

  let validateGuestForm = function () {
    if (Number(roomNumber.value) === 1 && Number(guestNumber.value) !== 1) {
      roomNumber.setCustomValidity('1 комната только для одного гостя');
    } else if (Number(roomNumber.value) === 2 && Number(guestNumber.value) > 2) {
      roomNumber.setCustomValidity('2 комната только для одного или 2 гостей');
    } else if (Number(roomNumber.value) === 2 && Number(guestNumber.value) === 0) {
      roomNumber.setCustomValidity('2 комнаты только для одного или двух гостей');
    } else if (Number(roomNumber.value) === 3 && Number(guestNumber.value) < 1) {
      roomNumber.setCustomValidity('3 комнаты только для одного , двух или трех гостей');
    } else if (Number(roomNumber.value) === 100 && Number(guestNumber.value) !== 0) {
      roomNumber.setCustomValidity('100 комнат не для гостей');
    } else {
      roomNumber.setCustomValidity('');
    }
  };

  window.form = {
    validateGuestForm: validateGuestForm,
    fillAddressFieldDisabled: fillAddressFieldDisabled,
    disableForm: disableForm,
    activateForm: activateForm,
    fillAddressFieldActive: fillAddressFieldActive
  };
})();

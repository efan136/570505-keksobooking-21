
'use strict';
(function () {
  let main = document.querySelector('main');
  let addressField = document.querySelector("#address");
  let roomNumber = document.querySelector("#room_number");
  let guestNumber = document.querySelector("#capacity");
  window.addForm = document.querySelector('.ad-form');

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

  let returnDefaultPage = function () {
    window.map.disableMap();
    window.form.disableForm(window.fieldsets);
    window.form.disableForm(window.selects);
    window.pins.removePins();
    window.addForm.reset();
    window.mainPinResetPosition();
  };

  let errorHandler = function () {
    let errorTemplate = document.querySelector('#error').content.querySelector('.error');
    let uploadErrorPopup = errorTemplate.cloneNode(true);
    main.appendChild(uploadErrorPopup);
    let errorButton = document.querySelector('.error__button');
    let errorPopup = document.querySelector('.error');

    let closeErrorPopup = function () {
      main.removeChild(errorPopup);
    };

    errorButton.addEventListener('click', function () {
      closeErrorPopup();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeErrorPopup();
      }
    });
    document.addEventListener('click', function () {
      closeErrorPopup();
    });
  };

  let successHandler = function () {
    returnDefaultPage();
    let successTemplate = document.querySelector('#success').content.querySelector('.success');
    let uploadSuccessElement = successTemplate.cloneNode(true);
    main.appendChild(uploadSuccessElement);
    let SuccessPopup = main.querySelector('.success');
    let closeSuccessPopup = function () {
      main.removeChild(SuccessPopup);
    };
    document.addEventListener('click', function () {
      closeSuccessPopup();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeSuccessPopup();
      }
    });
  };
  window.addForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.upload(new FormData(window.addForm), successHandler, errorHandler);
  });

  window.form = {
    validateGuestForm: validateGuestForm,
    fillAddressFieldDisabled: fillAddressFieldDisabled,
    disableForm: disableForm,
    activateForm: activateForm,
    fillAddressFieldActive: fillAddressFieldActive
  };


})();

'use strict';

let mapPinMain = document.querySelector(".map__pin--main");
let addForm = document.querySelector(".ad-form");
let fieldsets = document.querySelectorAll("fieldset");
let selects = document.querySelectorAll("select");

window.form.fillAddressFieldDisabled();

window.form.disableForm(fieldsets);
window.form.disableForm(selects);

window.pins.drawPins();

addForm.addEventListener('input', function () {
  window.form.validateGuestForm();
});


mapPinMain.addEventListener('mousedown', function () {
  window.map.activateMap();
  window.form.activateForm(fieldsets);
  window.form.activateForm(selects);
  window.form.fillAddressFieldActive();
});

mapPinMain.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, window.map.activateMap);

});

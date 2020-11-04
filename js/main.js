'use strict';

let addForm = document.querySelector(".ad-form");
let fieldsets = document.querySelectorAll("fieldset");
let selects = document.querySelectorAll("select");

window.form.fillAddressFieldDisabled();

window.form.disableForm(fieldsets);
window.form.disableForm(selects);

addForm.addEventListener('input', function () {
  window.form.validateGuestForm();
});

window.mainPin.addEventListener('mousedown', function () {
  window.map.activateMap();
  window.form.activateForm(fieldsets);
  window.form.activateForm(selects);
  window.form.fillAddressFieldActive();
  window.load(window.successHandler, window.errorHandler);
});

'use strict';

let addForm = document.querySelector(".ad-form");
window.fieldsets = document.querySelectorAll("fieldset");
window.selects = document.querySelectorAll("select");

window.form.fillAddressFieldDisabled();

window.form.disableForm(window.fieldsets);
window.form.disableForm(window.selects);

addForm.addEventListener('input', function () {
  window.form.validateGuestForm();
});

window.mainPin.addEventListener('mousedown', function (evt) {
  if (evt.which === 1) {
    window.map.activateMap();
    window.form.activateForm(window.fieldsets);
    window.form.activateForm(window.selects);
    window.form.fillAddressFieldActive();
    window.load(window.successHandler, window.errorHandler);
  }

  window.formResetButton.addEventListener('click', function () {
    window.pinCards.closePinCard();
    window.returnDefaultPage();
  });
});

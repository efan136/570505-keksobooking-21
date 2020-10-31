'use strict';
(function () {
  let isEnterEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  };

  let isEscEvent = function (evt, action) {
    if (evt.key === 'Escape') {
      action();
    }
  };
  window.util = {
    isEnterEvent: isEnterEvent,
    isEscEvent: isEscEvent
  };
})();

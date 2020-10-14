'use strict';
(function () {
  let isEnterEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  };
  window.util = {
    isEnterEvent: isEnterEvent
  };
})();

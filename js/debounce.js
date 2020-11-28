'use strict';
(function () {

  const DEBOUNCE_INTERVAL = 300; // MS
  let lastTimeout;
  window.debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(cb, DEBOUNCE_INTERVAL);

  };
})();

'use strict';
let roomNumber = document.querySelector("#room_number");
let guestNumber = document.querySelector("#capacity");

let addForm = document.querySelector(".ad-form");
let mapPins = document.querySelector(".map__pins");
const MAIN_PIN_ARROW_HEIGHT = 22;
let map = document.querySelector(".map");
let fieldsets = document.querySelectorAll("fieldset");
let selects = document.querySelectorAll("select");
let pinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");
let addInformationForm = document.querySelector(".ad-form");
let addressField = document.querySelector("#address");
let mapPinMain = document.querySelector(".map__pin--main");
let features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
let photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

let geneateArr = function () {
  let newArr = [];
  for (let i = 0; i <= 7; i++) {
    let obj = {
      "author": {
        "avatar": "img/avatars/user" + "0" + (1 + i) + ".png"
      },
      "offer": {
        "title": "offer title",
        "address": {"location.x": 600,
          "location.y": 350
        },
        "price": 1000,
        "type": "bungalow",
        "rooms": 3,
        "guests": 3,
        "checkin": "12-00",
        "checkout": "13-00",
        "features": features,
        "description": "строка с описанием",
        "photos": photos
      },
      "location": {
        "x": 100,
        "y": 200
      }
    };
    newArr[i] = obj;
  }
  return newArr;
};

let drawPins = function () {
  for (let i = 0; i <= 7; i++) {
    let pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector("img").src = geneateArr()[i].author.avatar;
    pinElement.querySelector("img").alt = geneateArr()[i].author.title;
    pinElement.style.left = geneateArr()[i].location.x + "px";
    pinElement.style.top = geneateArr()[i].location.y + (30 + i * 40) + "px";
    mapPins.appendChild(pinElement);
  }
};

let fillAddressFieldDisabled = function () {
  addressField.value = Math.round(mapPinMain.offsetTop + (mapPinMain.offsetHeight / 2)) + "," + Math.round(mapPinMain.offsetLeft + (mapPinMain.offsetWidth / 2));
};

fillAddressFieldDisabled();

let disableForm = function (arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i].disabled = true;
  }
};

disableForm(fieldsets);
disableForm(selects);
drawPins();

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

addForm.addEventListener('input', function () {
  validateGuestForm();
});

let activateForm = function (arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i].disabled = false;
  }
};

let fillAddressFieldActive = function () {
  addressField.value = Math.round(mapPinMain.offsetTop + mapPinMain.offsetHeight + MAIN_PIN_ARROW_HEIGHT) + "," + Math.round(mapPinMain.offsetLeft + (mapPinMain.offsetWidth / 2));
};

let onMainPinEnterPress = function (evt) {
  if (evt.key === 'Enter') {
    activateMap();
  }
};

let activateMap = function () {
  map.classList.remove("map--faded");
  addInformationForm.classList.remove("ad-form--disabled");
  mapPinMain.removeEventListener('keydown', onMainPinEnterPress);
};

mapPinMain.addEventListener('mousedown', function () {
  activateMap();
  activateForm(fieldsets);
  activateForm(selects);
  fillAddressFieldActive();
});

mapPinMain.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activateMap();
  }
});

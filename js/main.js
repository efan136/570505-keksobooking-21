'use strict';
let map = document.querySelector(".map");
let pinTemplate = document.querySelector("#pin").content.querySelector(".map__pin");
let mapPins = document.querySelector(".map__pins");
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

let activateMap = function () {
  map.classList.remove("map--faded");
};
activateMap();

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
drawPins();


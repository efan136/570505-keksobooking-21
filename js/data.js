'use strict';
(function () {
  let features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
  let photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
  ];
  let generateArr = function () {
    let newArr = [];
    for (let i = 0; i <= 7; i++) {
      let obj = {
        "author": {
          "avatar": "img/avatars/user" + "0" + (1 + i) + ".png"
        },
        "offer": {
          "title": "offer title",
          "address": {
            "location.x": 600,
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

  window.data = {
    generateArr: generateArr
  };
})();

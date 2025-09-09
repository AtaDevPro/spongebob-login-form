"use strict";

const leftEye = document.querySelector(".lefteye");
const rightEye = document.querySelector(".righteye");
const userInput = document.querySelector("#userInput");
const passInput = document.querySelector("#passInput");

let leftEyeTop = 75;
let leftEyeLeft = 110;
let leftEyePaddingTop = 0;
let leftEyePaddingLeft = 0;

let rightEyeTop = 75;
let rightEyeLeft = 174;
let rightEyePaddingTop = 0;
let rightEyePaddingLeft = 0;

const userInputFocus = function () {
  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 10) {
      clearInterval(eyePosition);
    }

    leftEye.style.paddingTop = leftEyePaddingTop + "px";
    leftEye.style.left = leftEyeLeft + "px";

    rightEye.style.paddingTop = rightEyePaddingTop + "px";
    rightEye.style.left = rightEyeLeft + "px";

    leftEyePaddingTop++;
    leftEyeLeft--;
    rightEyePaddingTop++;
    rightEyeLeft--;
  }, 10);
};

const userInputBlur = function () {
  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 0) {
      clearInterval(eyePosition);
    }

    leftEye.style.paddingTop = leftEyePaddingTop + "px";
    leftEye.style.left = leftEyeLeft + "px";

    rightEye.style.paddingTop = rightEyePaddingTop + "px";
    rightEye.style.left = rightEyeLeft + "px";

    leftEyePaddingTop--;
    leftEyeLeft++;
    rightEyePaddingTop--;
    rightEyeLeft++;
  }, 10);
};

const userKeyHandler = function (e) {
  if (leftEyePaddingLeft > 20) {
    return false;
  }

  if (e.keyCode === 8) {
    leftEyePaddingLeft--;
    rightEyePaddingLeft--;
  } else {
    leftEyePaddingLeft++;
    rightEyePaddingLeft++;
  }

  leftEye.style.paddingLeft = leftEyePaddingLeft + "px";
  rightEye.style.paddingLeft = rightEyePaddingLeft + "px";
};

const passInputFocus = function () {
  let eyePosition = setInterval(() => {
    if (leftEyeTop === 60) {
      clearInterval(eyePosition);
    }

    leftEye.style.top = leftEyeTop + "px";
    leftEye.style.left = leftEyeLeft + "px";

    rightEye.style.top = rightEyeTop + "px";
    rightEye.style.left = rightEyeLeft + "px";

    leftEyeTop--;
    leftEyeLeft++;
    rightEyeTop--;
    rightEyeLeft--;
  }, 10);
};

const passInputBlur = function () {
  let eyePosition = setInterval(() => {
    if (leftEyeTop === 75) {
      clearInterval(eyePosition);
    }

    leftEye.style.top = leftEyeTop + "px";
    leftEye.style.left = leftEyeLeft + "px";

    rightEye.style.top = rightEyeTop + "px";
    rightEye.style.left = rightEyeLeft + "px";

    leftEyeTop++;
    leftEyeLeft--;
    rightEyeTop++;
    rightEyeLeft++;
  }, 10);
};

userInput.addEventListener("focus", userInputFocus);
userInput.addEventListener("blur", userInputBlur);
userInput.addEventListener("keydown", userKeyHandler);

passInput.addEventListener("focus", passInputFocus);
passInput.addEventListener("blur", passInputBlur);

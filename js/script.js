/* --------------------------------------------------- */
/* -------------------- Menu Icon -------------------- */
const btnNavEl = document.querySelector(".header_menu-box");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.add("header_menu-open");
});
/* -------------------- Menu Icon -------------------- */
/* --------------------------------------------------- */

/* --------------------------------------------- */
/* -------------------- Bar -------------------- */
const textOne = document.querySelector(".about_text-secondary-1");
const textTwo = document.querySelector(".about_text-secondary-2");
const textThree = document.querySelector(".about_text-secondary-3");

const barOne = document.querySelector(".about_bar-1");
const barTwo = document.querySelector(".about_bar-2");
const barThree = document.querySelector(".about_bar-3");

const oneToTwo = function () {
  textOne.style.transform = "translateX(-100%)";
  textTwo.style.transition = "transform 0.5s";
  textTwo.style.transform = "translateX(0)";

  textThree.style.transition = "transform 0s";
  textThree.style.transform = "translateX(100%)";

  textOne.classList.remove("about_text-secondary-active");
  textTwo.classList.add("about_text-secondary-active");

  barOne.classList.remove("about_bar-active");
  barTwo.classList.add("about_bar-active");
};

const threeToTwo = function () {
  textThree.style.transform = "translateX(100%)";
  textTwo.style.transition = "transform 0.5s";
  textTwo.style.transform = "translateX(0)";

  textOne.style.transition = "transform 0s";
  textOne.style.transform = "translateX(-100%)";

  textThree.classList.remove("about_text-secondary-active");
  textTwo.classList.add("about_text-secondary-active");

  barThree.classList.remove("about_bar-active");
  barTwo.classList.add("about_bar-active");
};

const twoToOne = function () {
  textTwo.style.transform = "translateX(100%)";
  textOne.style.transition = "transform 0.5s";
  textOne.style.transform = "translateX(0)";

  textThree.style.transition = "transform 0s";
  textThree.style.transform = "translateX(-100%)";

  textTwo.classList.remove("about_text-secondary-active");
  textOne.classList.add("about_text-secondary-active");

  barTwo.classList.remove("about_bar-active");
  barOne.classList.add("about_bar-active");
};

const threeToOne = function () {
  textThree.style.transform = "translateX(-100%)";
  textOne.style.transition = "transform 0.5s";
  textOne.style.transform = "translateX(0)";

  textTwo.style.transition = "transform 0s";
  textTwo.style.transform = "translateX(100%)";

  textThree.classList.remove("about_text-secondary-active");
  textOne.classList.add("about_text-secondary-active");

  barThree.classList.remove("about_bar-active");
  barOne.classList.add("about_bar-active");
};

const twoToThree = function () {
  textTwo.style.transform = "translateX(-100%)";
  textThree.style.transition = "transform 0.5s";
  textThree.style.transform = "translateX(0)";

  textOne.style.transition = "transform 0s";
  textOne.style.transform = "translateX(100%)";

  textTwo.classList.remove("about_text-secondary-active");
  textThree.classList.add("about_text-secondary-active");

  barTwo.classList.remove("about_bar-active");
  barThree.classList.add("about_bar-active");
};

const oneToThree = function () {
  textOne.style.transform = "translateX(100%)";
  textThree.style.transition = "transform 0.5s";
  textThree.style.transform = "translateX(0)";

  textTwo.style.transition = "transform 0s";
  textTwo.style.transform = "translateX(-100%)";

  textOne.classList.remove("about_text-secondary-active");
  textThree.classList.add("about_text-secondary-active");

  barOne.classList.remove("about_bar-active");
  barThree.classList.add("about_bar-active");
};

document.querySelector(".about_bar-2").addEventListener("click", function () {
  if (barOne.classList.contains("about_bar-active")) {
    oneToTwo();
  } else if (barThree.classList.contains("about_bar-active")) {
    threeToTwo();
  }
});

document.querySelector(".about_bar-1").addEventListener("click", function () {
  if (barTwo.classList.contains("about_bar-active")) {
    twoToOne();
  } else if (barThree.classList.contains("about_bar-active")) {
    threeToOne();
  }
});

document.querySelector(".about_bar-3").addEventListener("click", function () {
  if (barTwo.classList.contains("about_bar-active")) {
    twoToThree();
  } else if (barOne.classList.contains("about_bar-active")) {
    oneToThree();
  }
});
/* -------------------- Bar -------------------- */
/* --------------------------------------------- */

"use strict";

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle
const navToggles = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");

  overlay.addEventListener("click", closeNavbar);
};

addEventOnElem(navToggles, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

// header sticky
const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
};

addEventOnElem(window, "scroll", headerSticky);

// scroll reveal effect
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.6) {
      sections[i].classList.add("active");
    }
  }
};

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

/**
 * Modal script
 */
const modal = ($trigger, $modal, $backdrop, $activeClass, $close) => {
  const modalTriggers = document.querySelectorAll($trigger);
  const modal = document.querySelector($modal);
  const backdrop = document.querySelector($backdrop);
  const close = modal.querySelector($close);

  if (modalTriggers) {
    modalTriggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        backdrop.classList.add($activeClass);
        modal.classList.add($activeClass);
      });
    });

    backdrop.addEventListener("click", () => {
      backdrop.classList.remove($activeClass);
      modal.classList.remove($activeClass);
    });

    close.addEventListener("click", () => {
      backdrop.classList.remove($activeClass);
      modal.classList.remove($activeClass);
    });
  } else {
    return false;
  }
};

modal("[data-modal-trigger]", "[data-modal]", "[data-backdrop]", "active", "[data-modal-close]");

/**
 * Accordion
 */

const accordion = (parentSelector) => {
  const parent = document.querySelector(parentSelector);

  if (parent) {
    const header = parent.querySelectorAll("[data-accordion-id]");
    const content = parent.querySelectorAll("[data-accordion-content]");

    header.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        if (content[index]) {
          header[index].classList.toggle("is--active");
          content[index].classList.toggle("is--active");
        }
      });
    });
  }
};

accordion("[data-accordion]");

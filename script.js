/* // accordion

const accordion = document.querySelectorAll(".accordion-item");

const accordionVisibleClass = "accordion-active";

const accordionHandleClick = (e) => {

  const alreadyHasActive = e.target.parentNode.classList.contains(
    accordionVisibleClass
  );
  if (alreadyHasActive) {
    e.target.parentNode.classList.remove(accordionVisibleClass);
  } else {
    accordion.forEach((acc) => {
      acc.classList.remove(accordionVisibleClass);
    });

    e.target.parentNode.classList.add(accordionVisibleClass);
  }
};

accordion.forEach((accItem) => {
  accItem.addEventListener("click", accordionHandleClick);
}); */



const accordion = document.querySelectorAll(".accordion-item");

const accordionVisibleClass = "accordion-active";

const accordionHandleClick = (e) => {

  const alreadyHasActive = e.target.classList.contains(
    accordionVisibleClass
  );
  if (alreadyHasActive) {
    e.target.classList.remove(accordionVisibleClass);
  } else {
    accordion.forEach((acc) => {
      acc.classList.remove(accordionVisibleClass);
    });

    e.target.classList.add(accordionVisibleClass);
  }
};

accordion.forEach((accItem) => {
  accItem.addEventListener("click", accordionHandleClick);
});


accordion.forEach((accItem) => {
   accItem.addEventListener("click", accordionHandleClick); 
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header");
  const headerHeight = header.clientHeight;
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {

      // Add or remove the 'fixed-header' class based on scroll position
      if (window.scrollY > headerHeight) {
          header.classList.add("fixed-header");
      } else {
          header.classList.remove("fixed-header");
      }
  };
});
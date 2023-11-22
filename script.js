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
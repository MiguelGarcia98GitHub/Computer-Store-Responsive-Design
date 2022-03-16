let burgerDivContainer = document.querySelector(".burgerdivcontainer");
let ulNavBar = document.querySelector(".ul-navbar");

burgerDivContainer.addEventListener("click", () => {
  ulNavBar.classList.toggle("displaynoneclass");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    ulNavBar.classList.remove("displaynoneclass");
  } else {
    ulNavBar.classList.add("displaynoneclass");
  }
});

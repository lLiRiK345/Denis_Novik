const popUp = document.querySelector(".popup");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  popUp.classList.toggle("popUp-active");
  if (popUp.classList.contains("popUp-active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

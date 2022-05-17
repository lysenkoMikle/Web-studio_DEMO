let popupBg = document.querySelector(".popup_bg");
let popup = document.querySelector(".popup");
let openPopupButtons = document.querySelectorAll(".open_popup");
let closePopupButton = document.querySelector(".close_popup");
const body = document.querySelector("body");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("notOverflow");
    popupBg.classList.add("activePop");
    popup.classList.add("activePop");
  });
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("activePop");
  popup.classList.remove("activePop");
  document.body.classList.remove("notOverflow");
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("activePop");
    popup.classList.remove("activePop");
    document.body.classList.remove("notOverflow");
  }
});

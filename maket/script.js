// const openPopUp = document.getElementById("popup_open");
// const closePopUp = document.getElementById("popup_close");
// const PopUp = document.getElementById("pop_up");
// const cont = document.getElementById("container");

// openPopUp.addEventListener("click", function (e) {
//   e.preventDefault();
//   PopUp.classList.add("activePopUp");
// });

// closePopUp.addEventListener("click", () => {
//   PopUp.classList.remove("activePopUp");
// });

// cont.onclick = function (event) {
//   if (event.target == PopUp) {
//     PopUp.classList.remove("activePopUp");
//   }
// };

let popupBg = document.querySelector(".popup_bg");
let popup = document.querySelector(".popup");
let openPopupButtons = document.querySelectorAll(".open_popup");
let closePopupButton = document.querySelector(".close_popup");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("activePop");
    popup.classList.add("activePop");
  });
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("activePop");
  popup.classList.remove("activePop");
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("activePop");
    popup.classList.remove("activePop");
  }
});

let burger = function () {
  const burgerBtn = document.querySelector(".nav__burger");
  const burgerMenu = document.querySelector(".menu");
  const body = document.querySelector("body");

  burgerBtn.addEventListener("click", function () {
    if (!burgerBtn.classList.contains("active_Burger")) {
      burgerBtn.classList.add("active_Burger");
      burgerMenu.classList.add("active_Burger");
      body.classList.add("notOverflow");
    } else {
      burgerBtn.classList.remove("active_Burger");
      burgerMenu.classList.remove("active_Burger");
      body.classList.remove("notOverflow");
    }
  });
};

burger();

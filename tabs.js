const tabBtn = document.querySelectorAll(".btn__link");
const tabsItem = document.querySelectorAll(".item");

tabBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabClass = currentBtn.getAttribute("data-tab");
    let currentCl = document.querySelectorAll(tabClass);

    if (!currentBtn.classList.contains("active")) {
      tabBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItem.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");

      currentCl.forEach(function (i) {
        i.classList.add("active");
      });
    }
  });
});

document.querySelector(".btn__link").click();

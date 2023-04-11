// Advantages of salary cards JS

const navTabBtns = document.querySelectorAll(".tab-nav-button");
const navTab1 = document.querySelector(".tab-content-1");
const navTab2 = document.querySelector(".tab-content-2");
navTab2.style.display="none";


navTabBtns.forEach((e) => {
  e.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "1":
        e.target.style.color = "black";
        navTab1.style.display = "flex";
        navTab2.style.display = "none";
        e.target.nextElementSibling.style.color = "gray";
        e.target.style.borderBottom = "2px green solid";
        e.target.nextElementSibling.style.border = "none";
        break;
      case "2":
        e.target.style.color = "black";
        navTab1.style.display = "none";
        navTab2.style.display = "flex";
        e.target.previousElementSibling.style.color = "gray";
        e.target.style.borderBottom = "2px green solid";
        e.target.previousElementSibling.style.border = "none";

        break;
    }
  });
});

// Advantages of salary cards JS
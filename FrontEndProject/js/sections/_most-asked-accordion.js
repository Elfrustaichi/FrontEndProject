// Most asked accordion JS
const questionButtons = document.querySelectorAll(".question-acc");

questionButtons.forEach((e) => {
  const targetDropdown = e.querySelector(".accordion-dropdown-question");
  const targetDropdownIcon = e.querySelector("img");
  const targetDropdownHead = e.querySelector(".accordion-header");
  targetDropdown.style.display = "none";

  e.addEventListener("click", () => {
    if (targetDropdown.style.display === "none") {
      targetDropdown.style.display = "block";
      targetDropdownHead.style.color = "green";

      targetDropdownIcon.setAttribute(
        "src",
        "./assets/img/accordion-icon-dropdown.png"
      );
    } else {
      targetDropdown.style.display = "none";
      targetDropdownHead.style.color = "black";
      targetDropdownIcon.setAttribute("src", "./assets/img/accordion-icon.png");
    }
  });
});

// Most asked accordion JS
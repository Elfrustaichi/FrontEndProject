// Business card dropdown JS

const businessCardContents = document.querySelectorAll(".card-content");
const businessCardContentsDisplay = document.querySelectorAll(
  ".card-content-dropdown"
);

businessCardContentsDisplay.forEach((e) => {
  e.style.display = "none";
});

businessCardContents.forEach((e) => {
  const businessCardDropdownBtn = e.querySelector(".card-info-buttons button");
  const businessDropdownContent = e.querySelector(".card-content-dropdown");
  businessCardDropdownBtn.addEventListener("click", (e) => {
    if (businessDropdownContent.style.display === "none") {
      businessDropdownContent.style.display = "block";
      e.target.innerText = "Bağla";
    } else {
      businessDropdownContent.style.display = "none";

      businessCardDropdownBtn.innerText = "Ətraflı";
    }
  });
});

// Business card dropdown JS
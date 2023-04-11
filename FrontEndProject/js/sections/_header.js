// Header JS
const headerNavTabs = document.querySelectorAll(".nav-tab-header");
const navTabDropdown = document.querySelector(".header-dropdown-hover");
const dropdownContentContainer = document.querySelector(".dropdown-container");
const dropDownButton = document.querySelector(".choose-button");
const dropDownButtonContent = document.querySelector(".dropdown-button");
dropDownButtonContent.style.display = "none";

dropDownButton.addEventListener("click", () => {
  if (dropDownButtonContent.style.display === "none") {
    dropDownButtonContent.style.display = "block";
  } else {
    dropDownButtonContent.style.display = "none";
  }
});

navTabDropdown.addEventListener("mouseover", () => {
  navTabDropdown.style.display = "block";
});
navTabDropdown.addEventListener("mouseout", () => {
  navTabDropdown.style.display = "none";
});

headerNavTabs.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    switch (e.target.innerText) {
      case "Biznes üçün xidmətlər":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML += `
        <div class="col-md-6 dropdown-content">
        <a href="">Tariflər</a>
        <a href="">GRO platforması</a>
        <a href="">Biznes üçün hesab</a>
        <a href="">Əməkhaqqı lahiyəsi</a>
        <a href="">Ödənişlər</a>
      </div>
      <div class="col-md-6 dropdown-content">
            <a href="">Biznes kartlar</a>
            <a href="">POS-terminal və E-kassa</a>
            <a href="">Elektron ticarət</a>
            <a href="">Linklə ödəniş</a>
          </div>
          `;
        break;
      case "Kreditlər":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML += `
            <div class="col-md-6 dropdown-content">
            <a href="">Onlayn biznes kreditləri</a>
            <a href="">Biznes kreditləri</a>
            <a href="">Gömrük kartı üzrə kredit xətti</a>
            <a href="">SİF kreditləri</a>
          </div>`;
        break;
      case "Faktorinq":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML += `
                <div class="col-md-6 dropdown-content">
                <a href="">İnvoysların maliyyələşdirilməsi</a>
                <a href="">Alış sifarişi əsasında maliyyələşmə</a>
                <a href="">Təchizat zəncirinin maliyyələşdirilməsi</a>
              </div>`;
        break;
      case "Sənədli əməliyyatlar":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML += `
                    <div class="col-md-6 dropdown-content">
                    <a href="">Ekspress-Tender qarantiyası</a>
                    <a href="">Bank qarantiyası</a>
                    <a href="">Akkreditiv</a>
                    <a href="">İnkasso</a>
                  </div>
                  <div class="col-md-6 dropdown-content">
                    <a href="">Ticarətin maliyyələşdirilməsi</a>
                  </div>`;
        break;
      case "Əlavə Xidmətlər":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML = `
                        <div class="col-md-6 dropdown-content">
                        <a href="">İnkassasiya</a>
                        <a href="">Depozitlər</a>
                        <a href="">Bank seyfləri</a>
                        <a href="">Bulud CRM</a>
                      </div>
                      <div class="col-md-6 dropdown-content">
                        <a href="">ÇatBot</a>
                        <a href="">Elektron-ticarət üçün mobil tətbiq</a>
                        <a href="">Umico MasterPass</a>
                        <a href="">PAŞA Biznes</a>
                      </div>`;
        break;
    }
    navTabDropdown.style.display = "block";
  });
  e.addEventListener("mouseout", () => {
    navTabDropdown.style.display = "none";
  });
});

// Header JS
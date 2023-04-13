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
        <a href="./rates.html">Tariflər</a>
        <a href="https://gro.az/">GRO platforması</a>
        <a href="./accounts.html" target="_blank">Biznes üçün hesab</a>
        <a href="./salary-cards.html">Əməkhaqqı lahiyəsi</a>
        <a href="./payments.html">Ödənişlər</a>
      </div>
      <div class="col-md-6 dropdown-content">
            <a href="./business-cards.html">Biznes kartlar</a>
            <a href="./POS-terminal.html">POS-terminal və E-kassa</a>
            <a href="./e-commerce.html">Elektron ticarət</a>
            <a href="./pay-by-link.html">Linklə ödəniş</a>
          </div>
          `;
        break;
      case "Kreditlər":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML += `
            <div class="col-md-6 dropdown-content">
            <a href="./online-business-credit.html">Onlayn biznes kreditləri</a>
            <a href="yaz">Biznes kreditləri</a>
            <a href="https://www.pashabank.az/sme_banking/az/node/51">Gömrük kartı üzrə kredit xətti</a>
            <a href="yaz">SİF kreditləri</a>
          </div>`;
        break;
      case "Faktorinq":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML += `
                <div class="col-md-6 dropdown-content">
                <a href="https://www.pashabank.az/sme_banking/az/node/29">İnvoysların maliyyələşdirilməsi</a>
                <a href="https://www.pashabank.az/sme_banking/az/sme_purchase_order_finance">Alış sifarişi əsasında maliyyələşmə</a>
                <a href="./POS-terminal.html">Təchizat zəncirinin maliyyələşdirilməsi</a>
              </div>`;
        break;
      case "Sənədli əməliyyatlar":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML += `
                    <div class="col-md-6 dropdown-content">
                    <a href="./accounts.html" target="_blank">Ekspress-Tender qarantiyası</a>
                    <a href="./bank-guarantees.html">Bank qarantiyası</a>
                    <a href="https://www.pashabank.az/sme_banking/az/node/36">Akkreditiv</a>
                    <a href="https://www.pashabank.az/sme_banking/az/node/37">İnkasso</a>
                  </div>
                  <div class="col-md-6 dropdown-content">
                    <a href="https://www.pashabank.az/sme_banking/az/node/38">Ticarətin maliyyələşdirilməsi</a>
                  </div>`;
        break;
      case "Əlavə Xidmətlər":
        dropdownContentContainer.innerHTML = "";
        dropdownContentContainer.innerHTML = `
                        <div class="col-md-6 dropdown-content">
                        <a href="https://www.pashabank.az/sme_banking/az/node/12">İnkassasiya</a>
                        <a href="https://www.pashabank.az/sme_banking/az/node/14">Depozitlər</a>
                        <a href="https://www.pashabank.az/sme_banking/az/node/8">Bank seyfləri</a>
                        <a href="https://www.pashabank.az/non_finance/az/node/6">Bulud CRM</a>
                      </div>
                      <div class="col-md-6 dropdown-content">
                        <a href="https://www.pashabank.az/non_finance/az/node/8">ÇatBot</a>
                        <a href="https://www.pashabank.az/non_finance/az/node/7">Elektron-ticarət üçün mobil tətbiq</a>
                        <a href="yaz">Umico MasterPass</a>
                        <a href="yaz">PAŞA Biznes</a>
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
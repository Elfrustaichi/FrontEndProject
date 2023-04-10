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

// Modal JS

const modalButtonShow = document.querySelectorAll(".more-info-btn");
const modalChange = document.querySelector(".modal-body");
const modalHeadChange = document.querySelector(".modal-header");

modalButtonShow.forEach((e) => {
  e.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "destek-modal":
        modalChange.innerHTML = "";
        modalHeadChange.innerHTML = "";
        modalChange.innerHTML += ` 
    <table>
    <tr>
      <td>Aylıq ödəniş</td>
      <td class="upper-green-td">0 AZN</td>
    </tr>
    <tr>
      <td>Hesabın açılması</td>
      <td class="green-td">Pulsuz</td>
    </tr>
    <tr>
      <td>Korporativ / Gömrük / Tacir kartı</td>
      <td>32 AZN və ya 16 USD/EUR/GBP (Lokal 15 AZN)</td>
    </tr>
    <tr>
      <td>Nağdlaşdırma</td>
      <td>0.7%</td>
    </tr>
    <tr>
      <td>Bankdaxili köçürmə</td>
      <td>Onlayn Bankdan pulsuz</td>
    </tr>
    <tr>
      <td>Milli valyutada ölkə daxili köçürmələr (adi icra olunma)</td>
      <td>0.18% (min. 2AZN- maks. 200 AZN) 
        Bankın Biznes Mərkəzlərində – 0.15%</td>
    </tr>
    <tr>
      <td>Xarici valyutada ödənişlər</td>
      <td>0.35% (min. 35 USD/EUR – maks. 400 USD/EUR)</td>
    </tr>
    <tr>
      <td>Valyuta mübadiləsi</td>
      <td>0.35%–dək (fərdi qaydada baxıla bilər)</td>
    </tr>
    <tr>
      <td>POS-terminal</td>
      <td>2.2% – Xarici bankların kartları, 
        2% – Yerli bankların kartları</td>
    </tr>
    <tr>
      <td>Elektron ticarət / Linklə ödəniş</td>
      <td>2% – Xarici bankların kartları,
        2% – Yerli bankların kartları</td>
    </tr>
  
  </table>`;
        modalHeadChange.innerHTML += ` 
  <h4 class="modal-title">"Dəstək" tarif paketi</h4>
  <button type="button" class="close" data-dismiss="modal">
    &times;
  </button>`;
        break;
      case "yuksel-modal":
        modalChange.innerHTML = "";
        modalHeadChange.innerHTML = "";
        modalChange.innerHTML += `
    <table>
    <tr>
      <td>Aylıq ödəniş</td>
      <td class="upper-green-td">40 AZN</td>
    </tr>
    <tr>
      <td>Hesabın açılması</td>
      <td class="green-td">32 AZN və ya 16 USD/EUR/GBP</td>
    </tr>
    <tr>
      <td>Korporativ / Gömrük / Tacir kartı</td>
      <td>Pulsuz</td>
    </tr>
    <tr>
      <td>Nağdlaşdırma</td>
      <td>Korporativ kartdan – 1 000. AZN (ekv.) pulsuz.
        Limitdən yuxarı - 0.3%</td>
    </tr>
    <tr>
      <td>Bankdaxili köçürmə</td>
      <td>Onlayn Bankdan — pulsuz</td>
    </tr>
    <tr>
        <td>Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)</td>
        <td>0.15% (min. 2.3 AZN - maks. 250 AZN)</td>
      </tr>
    <tr>
      <td>Milli valyutada ölkə daxili köçürmələr (adi icra olunma)</td>
      <td>Toplam 15 000. AZN-dək 5 pulsuz köçürmə.
        Limitdən yuxarı 0.12% (min. 1.3 AZN - maks. 150  AZN)</td>
    </tr>
    <tr>
      <td>Xarici valyutada ödənişlər</td>
      <td>0.28% (min. 35 USD/EUR - maks. 400 USD/EUR)</td>
    </tr>
    <tr>
      <td>Valyuta mübadiləsi</td>
      <td>0.2%</td>
    </tr>
    <tr>
      <td>POS-terminal</td>
      <td>2.2% - Xarici bankların kartları, <br>
        2% - Yerli bankların kartları</td>
    </tr>
    <tr>
      <td>Elektron ticarət / Linklə ödəniş</td>
      <td>1.9% – Xarici bankların kartları,
        1.6% – Yerli bankların kartları</td>
    </tr>
  
  </table>`;
        modalHeadChange.innerHTML += `
     <h4 class="modal-title">Biznesinizi inkişaf etdirmək istəyirsiniz?</h4>
    <button type="button" class="close" data-dismiss="modal">
      &times;
    </button>`;
        break;

      case "parla-modal":
        modalChange.innerHTML = "";
        modalHeadChange.innerHTML = "";
        modalChange.innerHTML += `
      <table>
      <tr>
        <td>Aylıq ödəniş</td>
        <td class="upper-green-td">110 AZN</td>
      </tr>
      <tr>
        <td>Hesabın açılması</td>
        <td class="green-td">Pulsuz</td>
      </tr>
      <tr>
        <td>Korporativ / Gömrük / Tacir kartı</td>
        <td>32 AZN və ya 16 USD/EUR/GBP</td>
      </tr>
      <tr>
        <td>Nağdlaşdırma</td>
        <td>0.5%</td>
      </tr>
      <tr>
        <td>Bankdaxili köçürmə</td>
        <td>Onlayn Bankdan — pulsuz</td>
      </tr>
      <tr>
        <td>Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)</td>
        <td>0.14% (min. 2 AZN - maks. 225 AZN)</td>
      </tr>
      <tr>
        <td>Milli valyutada ölkə daxili köçürmələr (adi icra olunma)</td>
        <td>Toplam 30 000. AZN-dək 10 pulsuz köçürmə.
          Limitdən yuxarı 0.11% (min. 1 AZN - maks. 125 AZN)</td>
      </tr>
      <tr>
        <td>Xarici valyutada ödənişlər</td>
        <td>Toplam 10 000. USD-dək (ekv.) 1 pulsuz ödəniş.
          Limitdən yuxarı 0.25% (min. 30 USD/EUR - maks. 350  USD/EUR)</td>
      </tr>
      <tr>
        <td>Valyuta mübadiləsi</td>
        <td>Pulsuz</td>
      </tr>
      <tr>
        <td>POS-terminal</td>
        <td>2.2% - Xarici bankların kartları,
          2% - Yerli bankların kartları</td>
      </tr>
      <tr>
        <td>Elektron ticarət / Linklə ödəniş</td>
        <td>1.9% – Xarici bankların kartları,
          1.7% – Yerli bankların kartları</td>
      </tr>
    
    </table>`;
        modalHeadChange.innerHTML += `
      <h4 class="modal-title">Biznesiniz əmin addımlarla irəliləyir?</h4>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>`;
        break;
    }
  });
});

// Modal JS

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

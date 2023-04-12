// Modal JS POS

const posmodalButtonShow = document.querySelectorAll("#package-rates-POS .more-info-btn");
const posmodalChange = document.querySelector("#package-rates-POS .modal-body");
const posmodalHeadChange = document.querySelector("#package-rates-POS .modal-header");

posmodalButtonShow.forEach((e) => {
  e.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "yuksel-modal":
        posmodalChange.innerHTML = "";
        posmodalHeadChange.innerHTML = "";
        posmodalChange.innerHTML += `
        <ul>
  <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg"> Təmassız ödənişlərin qəbulu</li>
  <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Rahat və sürətli əməliyyat sistemi</li>
  <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">4G və WiFi dəstəyi</li>
  <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">5.5 sensorlu ekran</li>
  <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Uzun ömürlü enerji saxlama qabiliyyəti</li>
  <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">3G şəbəkə dəstəyi</li>
</ul>
        `;
        posmodalHeadChange.innerHTML += `
     <h4 class="modal-title">POS–terminal</h4>
    <button type="button" class="close" data-dismiss="modal">
      &times;
    </button>`;
        break;

      case "parla-modal":
        posmodalChange.innerHTML = "";
        posmodalHeadChange.innerHTML = "";
        posmodalChange.innerHTML += `
        <ul>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">E-kassa imkanları</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">POS–terminal funksiyası</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Dövlət vergi xidməti ilə inteqrasiya</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Anbar uçot sistemi funksiyası</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Fiskal çek printeri</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">QR kodla çeklərin çapı</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Təmassız ödənişlərin qəbulu</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Rahat interfeys</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">5.5 sensorlu ekran</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Android proqram təminatı</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Yüksək keyfiyyətli kamera</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">4G və WiFi dəstəyi</li>
        <li><img src="https://sme.pashabank.az/themes/sme/assets/images/done.svg">Kassa proqram təminatlı cihaz</li>
      
      </ul>`;
        posmodalHeadChange.innerHTML += `
      <h4 class="modal-title">Biznesiniz əmin addımlarla irəliləyir?</h4>
      <button type="button" class="close" data-dismiss="modal">
        &times;
      </button>`;
        break;
    }
  });
});



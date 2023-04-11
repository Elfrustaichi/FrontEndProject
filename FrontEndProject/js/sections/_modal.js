// Modal JS

const modalButtonShow = document.querySelectorAll("#package-rates .more-info-btn");
const modalChange = document.querySelector("#package-rates .modal-body");
const modalHeadChange = document.querySelector("#package-rates .modal-header");

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
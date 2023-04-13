const submitFormButton=document.querySelector("#application-form a button");
const nameInputForm=document.querySelector("#application-form .form-name");
const numberInputForm=document.querySelector("#application-form .form-number");
const jsInput=document.querySelector("#application-form .js-input");

submitFormButton.addEventListener("click",(e)=>{
  if(nameInputForm.value.trim()===""||numberInputForm.value.trim()===""){
    jsInput.innerHTML="";
    jsInput.innerHTML+=`<p style="color: red;">Bütün saheler doldurulmalidir !</p>`

  }else{
    jsInput.innerHTML="";
    jsInput.innerHTML+=`<p style="color: rgb(0, 194, 0);">Müraciətiniz qeydə alındı !</p>`
}

})

const preloaderScreen=document.querySelector("#preloader");

window.addEventListener("load",()=>{
    setTimeout(()=>{
         preloaderScreen.classList.remove("show");
         preloaderScreen.classList.add("hidden");
    },1000)
    setTimeout(()=>{
        preloaderScreen.style.display="none";
    },2000)

});

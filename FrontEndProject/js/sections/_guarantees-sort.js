const sortButtons=document.querySelectorAll(".sort-buttons button");
const allGuarantees=document.querySelectorAll("#guarantees-sort .guarantee");
const tenderGuarantee=document.querySelector("#guarantees-sort .tender");
const expressGuarantee=document.querySelector("#guarantees-sort .express");
const icraGuarantee=document.querySelector("#guarantees-sort .icra");
const avansGuarantee=document.querySelector("#guarantees-sort .avans");
const maliyyeGuarantee=document.querySelector("#guarantees-sort .maliyye");
const odemeGuarantee=document.querySelector("#guarantees-sort .odeme");
const gomrukGuarantee=document.querySelector("#guarantees-sort .gomruk");
const kontrqarantiyaGuarantee=document.querySelector("#guarantees-sort .kontrqarantiya");
allGuarantees.forEach((e)=>{
    e.style.display="block";
})

sortButtons.forEach((e)=>{
e.addEventListener("click",(e)=>{
    switch (e.target.value) {
        case "all":
            allGuarantees.forEach((e)=>{
                console.log(e.style.display);
                e.style.display="block";
            });
            buttonActive(e.target);
            break;
            case "tender":
                allGuarantees.forEach((e)=>{
                    e.style.display="none";
                });
                tenderGuarantee.style.display="block";
                buttonActive(e.target);
                break;
                case "express":
                    allGuarantees.forEach((e)=>{
                        e.style.display="none";
                    });
                    expressGuarantee.style.display="block";
                buttonActive(e.target);
                break;
                case "icra":
                    allGuarantees.forEach((e)=>{
                        e.style.display="none";
                    });
                    icraGuarantee.style.display="block";
                buttonActive(e.target);
                break;
                case "avans":
                    allGuarantees.forEach((e)=>{
                        e.style.display="none";
                    });
                    avansGuarantee.style.display="block";
                buttonActive(e.target);
                break;
                case "maliyye":
                    allGuarantees.forEach((e)=>{
                        e.style.display="none";
                    });
                    maliyyeGuarantee.style.display="block";
                buttonActive(e.target);
                break;
                case "odeme":
                    allGuarantees.forEach((e)=>{
                        e.style.display="none";
                    });
                    odemeGuarantee.style.display="block";
                buttonActive(e.target);
                break;
                case "gomruk":
                    allGuarantees.forEach((e)=>{
                        e.style.display="none";
                    });
                    gomrukGuarantee.style.display="block";
                buttonActive(e.target);
                break;
                case "kontrqarantiya":
                    allGuarantees.forEach((e)=>{
                        e.style.display="none";
                    });
                    kontrqarantiyaGuarantee.style.display="block";
                buttonActive(e.target);
                break;


    
    }
})
})



function buttonActive(target) {
    sortButtons.forEach((e)=>{
        e.removeAttribute("class");
    });
    target.setAttribute("class","active");
}
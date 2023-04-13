
// Business loan calculator

const sliderInputPriceAmount = document.querySelectorAll(".price-amount-slider  input");
const resutlTotalPriceAmount = document.querySelector(".result-show-table #price-for-mont");
let sliderPercentValue = document.querySelector(".result-show-table #percent-loan-increase");
let sliderTotalPercentValue = parseInt(sliderPercentValue.innerText);

let totalSliderValue = 0;
let sliderResultTotalCash = 5000;
let sliderTotalTimeValue = 3;

sliderInputPriceAmount.forEach(inputSlide => {
    let slideValue = inputSlide.parentElement.firstElementChild.querySelector("input")
    inputSlide.oninput = (() => {
        let value1 = inputSlide.value;
        slideValue.value = value1;
        if(slideValue.value.length > 3){
            sliderResultTotalCash = parseInt(slideValue.value)
        }

        if(slideValue.value.length < 3){
            sliderTotalTimeValue = parseInt(slideValue.value)
            switch (sliderTotalTimeValue) {
                case 3:
                    sliderTotalPercentValue = 12
                    sliderPercentValue.textContent = 12
                    break;
                case 4:
                    sliderTotalPercentValue = 12
                    sliderPercentValue.textContent = 12
                    break;
                case 5:
                    sliderTotalPercentValue = 12
                    sliderPercentValue.textContent = 12
                    break;
                case 6:
                    sliderTotalPercentValue = 12
                    sliderPercentValue.textContent = 12
                    break;
                case 7:
                    sliderTotalPercentValue = 14
                    sliderPercentValue.textContent = 14
                    break;
                case 8:
                    sliderTotalPercentValue = 14
                    sliderPercentValue.textContent = 14
                    break;
                case 9:
                    sliderTotalPercentValue = 14
                    sliderPercentValue.textContent = 14
                    break;
                case 10:
                    sliderTotalPercentValue = 15.5
                    sliderPercentValue.textContent = 15.5
                    break;
                case 11:
                    sliderTotalPercentValue = 15.5
                    sliderPercentValue.textContent = 15.5
                    break;
                case 12:
                    sliderTotalPercentValue = 15.5
                    sliderPercentValue.textContent = 15.5
                    break;
                case 13:
                    sliderTotalPercentValue = 16.5
                    sliderPercentValue.textContent = 16.5
                    break;
                case 14:
                    sliderTotalPercentValue = 16.5
                    sliderPercentValue.textContent = 16.5
                    break;
                case 15:
                    sliderTotalPercentValue = 16.5
                    sliderPercentValue.textContent = 16.5
                    break;
                case 16:
                    sliderTotalPercentValue = 16.5
                    sliderPercentValue.textContent = 16.5
                    break;
                case 17:
                    sliderTotalPercentValue = 16.5
                    sliderPercentValue.textContent = 16.5
                    break;
                case 18:
                    sliderTotalPercentValue = 17
                    sliderPercentValue.textContent = 16.5
                    break;
                case 19:
                    sliderTotalPercentValue = 17
                    sliderPercentValue.textContent = 17
                    break;
                case 20:
                    sliderTotalPercentValue = 17
                    sliderPercentValue.textContent = 17
                    break;
                case 21:
                    sliderTotalPercentValue = 17
                    sliderPercentValue.textContent = 17
                    break;
                case 22:
                    sliderTotalPercentValue = 17
                    sliderPercentValue.textContent = 17
                    break;
                case 23:
                    sliderTotalPercentValue = 17
                    sliderPercentValue.textContent = 17
                    break;
                case 24:
                    sliderTotalPercentValue = 17
                    sliderPercentValue.textContent = 17
                    break;
            }
        }
        totalSliderValue =  (sliderResultTotalCash* (sliderTotalPercentValue/(12/sliderTotalTimeValue))/100)+sliderResultTotalCash/sliderTotalTimeValue; 
        resutlTotalPriceAmount.textContent = totalSliderValue.toFixed(2)
    })
})

// Business loan calculator
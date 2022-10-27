let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")
let results = []
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function(){  
    let meterToFeet = inputEl.value * 3.28084;
    let feetTometer = inputEl.value * 0.3048;
    let litersToGallons = inputEl.value * 0.219969;
    let gallonsTolitter = inputEl.value * 4.54609;
    let kgToPounds = inputEl.value * 2.20462;
    let poundsToKg = inputEl.value * 0.453592;

    lengthResult.innerHTML = `${inputEl.value} metres = ${meterToFeet.toFixed(3)} feet 
        | ${inputEl.value} feet = ${feetTometer.toFixed(3)} metres`
    volumeResult.innerHTML = `${inputEl.value} liters = ${litersToGallons.toFixed(3)} gallons 
    | ${inputEl.value} gallons = ${gallonsTolitter.toFixed(3)} liters`
    massResult.innerHTML = `${inputEl.value} kilos = ${kgToPounds.toFixed(3)} pounds 
    | ${inputEl.value} pounds = ${poundsToKg.toFixed(3)} kilos`
    inputEl.value = ""
}
)


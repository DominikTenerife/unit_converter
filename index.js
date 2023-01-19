/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.2808399
const literToGallon = 0.2641720524
const kilogramToPound = 2.20462262185

const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass  = document.getElementById("mass")
const input = document.getElementById("input")
const button = document.getElementById("convert-btn")

let numbers = []



button.addEventListener("click", function () {
    convert()
})

function convertToImperial (value, ratio){
   return (value*ratio).toFixed(3)
    
}

function convertToMetric (value, ratio){
   return (value/ratio).toFixed(3)
    
}
  

function convert () {
    numbers = []
    numbers.push(input.value)
    
    length.textContent = ` ${numbers[0]} meters = ${(convertToImperial(numbers[0], meterToFeet ))} feet | ${numbers[0]} feet = ${(convertToMetric(numbers[0], meterToFeet ))} meters`
    
    volume.textContent = ` ${numbers[0]} liters = ${(convertToImperial(numbers[0], literToGallon ))} gallons | ${numbers[0]} gallons = ${(convertToMetric(numbers[0], literToGallon ))} liters`
    
    mass.textContent = ` ${numbers[0]} kilos = ${(convertToImperial(numbers[0], kilogramToPound ))} pounds | ${numbers[0]} pounds = ${(convertToMetric(numbers[0], kilogramToPound ))} kilos`
    
    
    }
    
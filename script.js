let convertBtn= document.getElementById('convert-btn')
let numberInput = document.getElementById('numberInput')
let mf = document.getElementById('mf')
let lg = document.getElementById('lg')
let kp = document.getElementById('kp')



//Meter to Feet and vice versa
function getMeterToFeet (number) {
    return (number*3.281).toFixed(3)
}

function getFeetToMeter (number) {
    return (number/3.281).toFixed(3)
}


//Liter to Galon and vice versa

function getLiterToGalon (number) {
    return (number/3.785).toFixed(3)
}

function getGalonToLiter (number) {
    return (number* 3.785).toFixed(3)
}

/// Kilogram to Pound and vice versa

function getKilogramToPound (number) {
    return (number* 2.205).toFixed(3)
}

function getPoundToKilogram (number) {
    return (number/ 2.205).toFixed(3)
}

//helper function

function clearInput() {
    numberInput.value = "";
}

//click to convert

convertBtn.addEventListener('click', function() {
    mf.innerHTML = `${numberInput.value } meters = ${getMeterToFeet(numberInput.value)} feet | ${numberInput.value } feet = ${getFeetToMeter(numberInput.value)} meters `;

    lg.innerHTML = `${numberInput.value } liters = ${getLiterToGalon(numberInput.value)} gallons | ${numberInput.value } gallons = ${getGalonToLiter(numberInput.value)} liters `;

    kp.innerHTML = `${numberInput.value } kilos = ${getKilogramToPound(numberInput.value)} pounds | ${numberInput.value } pounds = ${getPoundToKilogram(numberInput.value)} kilos `;

    clearInput()
})
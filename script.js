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
    let value = Number(numberInput.value) ;
    if(!numberInput.value) {
        alert("Enter your number !")
    } else {
        mf.innerHTML = `${value} meters = ${getMeterToFeet(value)} feet | ${value} feet = ${getFeetToMeter(value)} meters `;

        lg.innerHTML = `${value} liters = ${getLiterToGalon(value)} gallons | ${value } gallons = ${getGalonToLiter(value)} liters `;

        kp.innerHTML = `${value} kilos = ${getKilogramToPound(value)} pounds | ${value } pounds = ${getPoundToKilogram(value)} kilos `;
    }
    
    clearInput()
})


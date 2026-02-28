function convertCelciusToFahreinheit(celcius){
    let fahreinheit = (celcius * 9/5) + 32;
    return fahreinheit;
}

console.log(convertCelciusToFahreinheit(30));

function convertFahreinheitToCelcius(fahreinheit){
    let celcius = (fahreinheit - 32) * 5/9;
    return celcius;
}

console.log(convertFahreinheitToCelcius(86));
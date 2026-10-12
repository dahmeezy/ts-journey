const nairaToUsdRate = 0.00075;

function nairaToUsd(amount){
    return (amount*nairaToUsdRate)
};

const usdToNairaRate = 1331.06;

function usdToNaira(amount){
    return (amount*usdToNairaRate)
};

function celsiusToFarenheit(celsius){
    return ((celsius*9)/5)+32
};

function kgToPounds(kg){
    return kg*2.20462
};

console.log(nairaToUsd(25000).toFixed(2));
console.log(usdToNaira(35).toFixed(2));
console.log(celsiusToFarenheit(0));
console.log(celsiusToFarenheit(100));
console.log(kgToPounds(10).toFixed(2));
console.log(usdToNaira(nairaToUsd(5000)).toFixed(2));


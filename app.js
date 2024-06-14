const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen= (valor) =>{

    return valor*oneEuroIs.JPY*(1/1.2)
}
const fromEuroToDollar =(valor) =>{

  return valor*oneEuroIs.USD
}
const fromYenToPound = (valor)=>{

  return oneEuroIs.GBP*((1/(valor*oneEuroIs.JPY*(1/1.2)))*(1/1.2))
} 
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};
console.log(fromDollarToYen(1))

console.log(fromYenToPound(3.5))
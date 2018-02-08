var euro = 33.46;
var dolar = 27.1196;
var euroDolar = euro / dolar + " dollars";
var inputEuro = prompt( "input amount of EURO");
var inputDolar = prompt("input amount of Dolar");

var resultEuro = inputEuro * euro + " UAH";
var resultDolar = inputDolar * dolar + " UAH"
console.log(inputEuro +' euros are equal '+ resultEuro + ',' + inputDolar + ' dollars are equal '
 + resultDolar+ ' one euro is equal '+ euroDolar);
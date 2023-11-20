var valueInDollar = 30;
var dollarExchangeRateToReal = 5.32;

var valueInReal = valueInDollar * dollarExchangeRateToReal;
valueInReal = valueInReal.toFixed(2);

alert("R$ " + valueInReal);

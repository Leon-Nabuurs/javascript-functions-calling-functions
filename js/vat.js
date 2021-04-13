const zeroTarif = 0;
const lowTarif = 9;
const highTarif = 21;

// VAT exercise 1

const calcVat = (netAmount, vatPercentage) => {
    return (netAmount * vatPercentage)/100;
}

const priceIncludingVat = (netAmount, vatCategory) => {
    if (vatCategory === 'zero') {
        vatPercentage = zeroTarif;
    } else if (vatCategory === 'low') {
        vatPercentage = lowTarif;
    } else {
        vatPercentage = highTarif;
    }
    return (netAmount + calcVat(netAmount, vatPercentage));
}

console.log(calcVat(100,zeroTarif));
console.log(calcVat(100,lowTarif));
console.log(calcVat(100,highTarif));

console.log(priceIncludingVat(100,'zero'));
console.log(priceIncludingVat(100,'low'));
console.log(priceIncludingVat(100,'high'));


// VAT Exercise 2

const calcVatComponent = (brutoAmount, vatPercentage) => {
    amount = [];
    amount['netto'] = (brutoAmount/(100+vatPercentage))*100;
    amount['vat'] = brutoAmount - amount['netto'];
    return amount;
}

const priceComponents = (brutoAmount, vatCategory) => {
    if (vatCategory === 'zero') {
        vatPercentage = zeroTarif;
    } else if (vatCategory === 'low') {
        vatPercentage = lowTarif;
    } else {
        vatPercentage = highTarif;
    }
    return (calcVatComponent(brutoAmount, vatPercentage));
}

console.log(priceComponents(121, 'high'));
console.log(priceComponents(109, 'low'));
console.log(priceComponents(100, 'zero'));
// console.log(items[0].price);

var totalPrices = 0;
var itemsBetweenArray = [];
var isWoodArray = [];
var moreThanEight = [];
var madeSelf = [];

// Average price
items.forEach(average);
function average(item) {
    totalPrices += item.price;
}

console.log("Average price: " + totalPrices / items.length);

// Between 14 and 18
items.forEach(betweenPrices);
function betweenPrices(item) {
    if (item.price >= 14 && item.price <= 18) {
        itemsBetweenArray.push(item.title);
    }
}

console.log('Items between 14 and 18: ' + itemsBetweenArray);

// GBP currency code
var currencyCode = 'GBP';
var matchesCurrencyCode = items.filter(function(item) {
    gbpItem = item.currency_code.includes(currencyCode);
    return gbpItem;
});

console.log(matchesCurrencyCode[0].title + ' costs £' + matchesCurrencyCode[0].price);

// Items made of wood
items.forEach(materialWood);
function materialWood(item) {
    if (item.materials.includes("wood")) {
        isWoodArray.push(item.title);
    }
}

console.log('Items made of wood: ' + isWoodArray);


// More than 8 materials
items.forEach(eightPlus);
function eightPlus(item) {
    if (item.materials.length >= 8) {
        moreThanEight.push(item.title);
    }
}

console.log('More than 8 materials: ' + moreThanEight);


// Made by sellers
items.forEach(selfMade);
function selfMade(item) {
    if (item.who_made === 'i_did') {
        madeSelf.push(item.title);
    }
}

console.log('Made by seller: ' + madeSelf.length);
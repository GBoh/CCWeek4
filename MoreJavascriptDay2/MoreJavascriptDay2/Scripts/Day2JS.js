var cart = [
  { name: 'Milk', price: 23.44 },
  { name: 'Cheese', price: 3.50 },
  { name: 'Peanuts', price: 8.00 },
  { name: 'Wine', price: 7.50 }
];
var cartTotal;
cartTotal = cart.reduce(function (previous, current) {
    return (previous + current.price);
}, 0);
console.log("Cart Total: " + cartTotal);

///////////////////
var array = [];
var sum = 0;
for (var i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}
array.forEach(function (supercalifragilisticexpialidociousItem) {
    sum += supercalifragilisticexpialidociousItem;
});
console.log(sum);

///////////////////
var apocalypse = new Date();
apocalypse.setTime(8640000000000000);
console.log(apocalypse.toISOString());

apocalypse.setTime(-8640000000000000);
console.log(apocalypse.toISOString());


///////////////////
var listOfNumbers = [17, 2, 3, 78, 4, 5, 12];
Sort(listOfNumbers);

function Sort(itemsToSort, sortMethod) {
    var sortedArr = itemsToSort.map(function (element) { return Element; });

    switch (sortMethod) {
        case 'ascending':
            sortMethod = function (a, b) {
                return a > b;
            };
            break;

        case 'decending':
            sortMethod = function (a, b) {
                return a < b;
            };
            break;

        default:

            break;
    }


    for (var loop = 0; loop < sortedArr.length; loop++) {
        for (var i = 0; i < sortedArr.length - 1; i++) {
            if (sortedArr[i] > sortedArr[i + 1]) {

                sorted = false;
                var temp = sortedArr[i];
                sortedArr[i] = sortedArr[i + 1];
                sortedArr[i + 1] = temp;
            }
        }
    }
    return sortedArr;
}


//function getSetInterval(seconds) {
//    return function (func) {
//        window.setInterval(func, seconds * 1000);
//    };
//}

//var executeEvery5Seconds = getSetInterval(5);
//executeEvery5Seconds(function () {
//    console.log("Hey Listen!");
//});

function Product(name, price) {
    this._name = name;
    this._price = price;
    this.calculateTotalPrice = function () {
        return this._price + calculateTaxPrice();
    };

    function calculateTaxPrice() {
        return this._price * 0.08;
    };
}

var product1 = new Product("Milk", 3.17);
var product2 = new Product("Gummy bears", 10.33);
console.log(product1.calculateTotalPrice());
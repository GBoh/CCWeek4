'use strict';

//var customer = {
//    _firstName: '',
//    _lastName: '',

//    set firstName(value) {
//        if (value === '') {
//            throw new Error('First name cannot be empty')
//        }
//        this._firstName = value;
//    },

//    set lastName(value) {
//        if (value === '') {
//            throw new Error('Last name cannot be empty')
//        }
//        this._lastName = value;
//    },


//    get fullName() {
//        return this._firstName + ' ' + this._lastName;
//    }
//}

//customer.firstName = 'Greg';
//customer.lastName = 'Bohanon';
//console.log(customer.fullName);

//dumpAll(customer);
function dumpAll(obj) {
    var allProp = "";
    for (var prop in obj) {
        allProp += ([prop] + "\n");
    }
    alert(allProp);
}

var customer = {
    required_firstName: '',
    required_lastName: '',
    favoriteColor: ''
};

var valCustomer = addRequiredValidation(customer);


function addRequiredValidation(obj) {
    var newObj = {};

    for (var prop in obj) {

        if (prop.indexOf("required_") === 0) {
            var newProp = prop.substring(9);
            newObj['_' + newProp] = obj[prop];
            Object.defineProperty(newObj, newProp, {

                set: function (value) {
                    if (value === '') {
                        throw new Error('First name cannot be empty')
                    }
                },
                get: function () {

                }

            });
        }
    }
    return newObj;
}

//valCustomer.firstName = '';
dumpAll(valCustomer);



//AddIntegers("1", 2);
//AddIntegers("apple");
//AddIntegers(3.4, 2);
//AddIntegers(1, 2);

//function AddIntegers(number1, number2) {
//    try {
//        if (typeof number1 === 'string' || typeof number2 === 'string') {
//            throw new Error('one of the inputs was a string');
//        }

//        if (number1 % 1 !== 0 || number2 % 1 !== 0) {
//            throw new Error('one of the numbers is not a integer');
//        }
//        var result = number1 + number2;
//        console.log(result);

//    } catch (ex) {
//        console.log(ex.name + ': ' + ex.message);
//    }

//}


//function calculateTax(price, taxRate) {
//    if (taxRate === undefined) {
//        taxRate = 0.08;
//    }
//    return price + (price * taxRate);
//}

//    console.log(calculateTax(20));
//    console.log(calculateTax(20, .05));
//    console.log(calculateTax(20,0));



//var userInput = prompt("Please enter your favorite number");
//var inputTest = /^\d*\.?\d+$/;

//if (inputTest.test(userInput)) {
//    alert("yay it was a number, multiplied by 100 it is " + (userInput * 100))
//} else {
//    alert(userInput + " is not a number, I'm sorry you can't understand simple instructions");
//}
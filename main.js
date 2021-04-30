// required arguments
var myArguments = process.argv.slice(2);

// text array for conversion
var numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// holds the text equivalent of all numbers
var textEquiv = [];

// loop counter
var i = 0;

// for all numbers
myArguments.forEach(function (number) {
    eq = "";
    // number splitting into digits
    inNumbers = number.split("");
    // all digits
    inNumbers.forEach(function (digit) {
        eq += numbers[parseInt(digit)];
    })
    // adding eq into the textEquiv array
    textEquiv[i] = eq;
    i++;
})

// output textEquic by joining
console.log(textEquiv.join(","))

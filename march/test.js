'use strict';

function printCertainNumbers() {
    //array for storing initial number/strings
    let initialArray = [];
    //array for storing final arrays of numbers, which meet the conditions
    let selectedNumbersArrays = [];

    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
          //push the number meets the condition partially
            initialArray[i] = i.toString();//and turn it to string for subsequent splitting per one digit ("33")
            //as a variant: initalArray.push(i.toString);
        }
    }
    //each element of initial array, which is "number" ("22,33 etc") should be splitted on separate sub array
    initialArray.forEach(function(element) {
      //for storing subarray and pushing to selected array
        let result = element.split('');
        selectedNumbersArrays.push(result);
    });
    // assign values  wich is subarrays, with the sum from  digits compounding it, 
    // if it is only less then 10, to filteredArrays variable,
    let filteredArrays = selectedNumbersArrays.filter(function(element) {
        let sumForChecking = element.reduce(function(previous, next) {
            return Number(previous) + Number(next);
        });
        if (sumForChecking < 10) {
            return element;
        }
    });

    document.write(filteredArrays.map(function(element) { return element.join('') }).join(', '));
    //change all digits elements of filteredArrays to string
    return filteredArrays.map(function(element) { return element.join('') }).join(', ');
}

printCertainNumbers();
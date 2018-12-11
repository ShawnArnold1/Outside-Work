"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */


function isNegative(input)
{
    if(input < 0){
        return true;
    }
    else if(input === 0){
        return false;
    }
    else{
        return false;
    }
}

function average(input)
{
    return input.reduce(function(a,b)
    {
        return parseInt(a + b) / input.length
    })
}

// var counter = 0;
// function countOdds(input) {
//
//
//     for(var i = 0; i < input.length; i++) {
//
//         if(input[i] % 2 === 0) {
//             return false
//         }
//
//         else{
//             counter++;
//         }
//     return counter;
//     }
// }

var count = 0;

function countOdds(input) {
    if (input == 0 || isNaN(input)) {
        return count;
    } else {
        if (input % 2 === 0) {
            return countOdds(input - 1);
            return count;
        }
        count++;
        return countOdds(input - 1);
    }
}

function convertNameToObject(input)
{
    input.split(" ")
    var obj = {};
    obj.firstName = input;
    obj.lastName = input;
    return obj
}
//
function fiveTo(input)
{
    for(var i = 5; i < 5; i++){
        return input
    }
}


// var names = [
//     {firstName: 'Harry', lastName: 'Potter'},
//     {firstName: 'Ron', lastName: 'weasley'},
//     {firstName: 'Hermione', lastName: 'granger'}
// ];
//
// function uppercaseLastNames(input)
// {
//     names.lastName.charAt[0].toUpperCase();
// }

function upperCaseLastNames(input)
{
    return input.lastName.index(0).toUpperCase()
}



var isNegative = function(input)
{
    return input < 0;
};


var average = function(array)
{
    var sum = 0;
    numbers.forEach(function(number)
    {
        sum += number;
    })
    return sum / numbers.length;
};


//move through the list of numbers(iterate: one at a time)
//


var countOdds = function(numbers)
{
    var counter = 0;
    numbers.forEach(function(number)
    {
        if(number %2 !== 0)
        {
            counter++;
        }
    });
    return counter;
};



//Step 1: Create an object

//Step 2:we need to split the string so we get two other string

// Once we have two strings, we need our object to have two properties

//step3: Return the completed object
        // firstName property contains the part of the string before the space
        // lastName property contains the part of the string after the space


var convertNameToObject = function(fullName)
{
    var object = {};
    var namePieces = fullName.split(" ");

    object.firstName = namePieces[0];
    object.lastName = namePieces[1];
    return object;
};



//if number >= 5, we'll count up
// else, countdown
//

var fiveTo = function(number)
{
    var output = [5];
    if (number > 5)
    {
        //count up to and including the number
        // adding each new number to the output array
        for(var i = 6; i <= number; i++)
        {
            output.push(i);
        }
    } else if(number < 5)
    {
        // count down from five, up to and including the number
        // adding each new number to the output array
        for(var i = 4; i >= number; i--)
        {
            output.push(i);
        }
    }
    return output;
};




var upperCaseLastNames = function(arrayOfObjects)
{
    var output = [];
    // Ryan's patent pending way of solving iterative problems without loop
    //step 1: blow off the loops
    //step 2: grab the first element of the array and assign it to the variable
    //step 3: console log single value/single steps, to understand the shape of the data
    //step 4: produce a solution that solves for the single item
    // step 5: take what you've produced and wrap it in a function
    //step 6: send that function in to a .forEach
    //step 7: replace array[0] with a singularly named argument

        arrayOfObjects.forEach(function(person){

        // re assignment
        var firstCharacter = person.lastName = person.lastName[0].toUpperCase()
        var restOfName = person.lastName.substring(1);
        person.lastName = firstCharacter + restOfName;
        output.push(person)
        })
            return output;
}







































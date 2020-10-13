/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

x = window.prompt("Input the First integer");
y = window.prompt("Input the second integer");

if (parseInt(x) > parseInt(y)) {
    console.log(x);
} else {
    console.log(y);
}

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

var i;
var x = 1;
var y = 1;
var z;
var sign = [3, -7, 2];

for (i = 0; i < sign.length; i++) {
    if (sign[i] < 0) {
        x = -1;
    } else {
        y = 1;
    }
}

z = x * y;
if (z < 0) {
    alert("The sign is -");
} else {
    alert("The sign is +");
}

/******* End Your Code ********* */


/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/

var number = [0, -1, 4];

if (number[0] > number[1] && number[0] > number[2]) {
    if (number[1] > number[2]) {
        console.log(number[0] + ", " + number[1] + ", " + number[2]);
    } else {
        console.log(number[0] + ", " + number[2] + ", " + number[1]);
    }
} else if (number[1] > number[0] && number[1] > number[2]) {
    if (number[0] > number[2]) {
        console.log(number[1] + ", " + number[0] + ", " + number[2]);
    } else {
        console.log(number[1] + ", " + number[2] + ", " + number[0]);
    }
} else if (number[2] > number[0] && number[2] > number[1]) {
    if (number[0] > number[1]) {
        console.log(number[2] + ", " + number[0] + ", " + number[1]);
    } else {
        console.log(number[2] + ", " + number[1] + ", " + number[0]);
    }
}

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

var i;
var numbers = [-5, -2, -6, 0, -1];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numbers[0] && numbers[i] >= numbers[1] && numbers[i] >= numbers[2] && numbers[i] >=
        numbers[3] && numbers[i] >= numbers[4]) {
        console.log(numbers[i])
    }
}

/******* End Your Code ********* */


/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

/******* Start Your Code *********/

var x = 1;
var y = 5;

if (x < y) {
    console.log("Hello World");
} else {
    console.log("Goodbye");
}

/******* End Your Code ********* */
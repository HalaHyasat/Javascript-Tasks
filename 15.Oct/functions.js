// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


/******* Start Your Code *********/

// using for
var nums = [1, 2, 3, 8, 9];
var i;
var odd = [];
oddArray(nums);

function oddArray(nums) {
    for (i = 0; i < 5; i++) {
        if (nums[i] % 2 != 0) {
            odd[i] = nums[i];
        }
    }
    odd = odd.filter(item => item);
    console.log(odd);
}


// using while
var nums = [1, 2, 3, 8, 9];
var i = 0;
var odd = [];
oddArray(nums);

function oddArray(nums) {
    while (i < 5) {
        if (nums[i] % 2 != 0) {
            odd[i] = nums[i];
        }
        i++;
    }
    odd = odd.filter(item => item);
    console.log(odd);
}

/******* End Your Code ********* */




// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


/******* Start Your Code *********/

// using for
var nums = [1, 2, 3, 8, 9];
var i;
var sum = 0;
avg(nums);

function avg() {
    for (i = 0; i < 5; i++) {
        sum = sum + nums[i];
    }
    var vagNum = sum / i;
    console.log(vagNum)
}

// using while
var nums = [1, 2, 3, 8, 9];
var i = 0;
var sum = 0;
avg(nums);

function avg() {
    while (i < 5) {
        sum = sum + nums[i];
        i++;
    }
    var vagNum = sum / i;
    console.log(vagNum)
}

/******* End Your Code ********* */




// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24



/******* Start Your Code *********/
factorial(4);

function factorial(n) {
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

/******* End Your Code ********* */
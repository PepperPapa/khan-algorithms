var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    console.log("Computing " + x + " raised to power " + n + ".");
    // base case
    if (n === 0) {
        return 1;   
    }
    // recursive case: n is negative 
    if (n < 0) {
        return 1 / power(x, -n);   
    }
    /*
     * 这里区分奇数、偶数的目的为了减少递归的次数，因为偶次幂x**n = (x ** n/2) * (x ** n/2)
     */

    // recursive case: n is odd
    if (isOdd(n)) {
        return x * power(x, n - 1);
    }
    // recursive case: n is even
    if (isEven(n)) {
        var y = power(x, n / 2);
        return y * y;
    }
};

var displayPower = function(x, n) {
    console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
console.log(power(3, 0), 1);
displayPower(3, 1);
console.log(power(3, 1), 3);
displayPower(3, 2);
console.log(power(3, 2), 9);
displayPower(3, -1);
console.log(power(3, -1), 1/3);

displayPower(13, -10);
displayPower(13, 13);

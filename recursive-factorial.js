var factorial = function(n) {
    // nomal implement:
    // var result = 1;
    // for (var i = 1; i <= n; i++) {
    //     result *= i;
    // }
    // return result;
    
    // recursive implement:
  	if (n === 0) {
  	    return 1;
  	}
  	return n * factorial(n - 1);
};

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));

const factorial = function fact(n){
    if(n===1 || n===0) return 1;
    return n * fact(n-1)
}
console.log(factorial(5));

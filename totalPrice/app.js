function totalPrice(price,tax) {
    return price + (price*tax) / 100

}
console.log(totalPrice(50,18));


function totalPrice(tax, ...args) {
    sum = 0
    for(i = 0; i < args.length; i++){
        a = args[i] + (args[i]*18) / 100;
        sum += a;
    }
    return sum
}
console.log(totalPrice(18,20,10,30))


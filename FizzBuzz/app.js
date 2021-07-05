let number = prompt("enter a number between 1-100");
for(i = 0; i <= number; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i, "FizzBuzz")

    }else if(i % 5 === 0){
        console.log(i, "Buzz")
    }else if(i % 3 === 0){
        console.log(i, "Fizz")
    }else{
        console.log(i)
    }
}

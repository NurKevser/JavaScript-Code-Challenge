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


//      TERNARY SOLUTION

for(let i = 1; i <= 100; i++)
console.log(`${i} ${i % 3 === 0 && "Fizz" || ""} ${i % 5 === 0 && "Buzz" || ""}`)   
//tek satırda FizzBuzz = çıktıyı alırken stringleri concatenate yapıyor ve bunu yaparken eğer ikisi de doğruysa birinciyi alıyor ikisi de yanlışsa 2.yi alıyor boolean mantığı
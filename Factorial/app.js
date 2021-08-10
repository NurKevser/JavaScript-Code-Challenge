/* const factorial = function fact(n){
    if(n===1 || n===0) return 1;
    return n * fact(n-1)
}
console.log(factorial(5)); */

// function count (str) {
//     var count = {};
//     str.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }
//   console.log(count("enter a sentence"));

/* function count_vowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let liste = [];
  let count = 0;
  for (i = 0; i < str.toLowerCase().length; i++) {
    if (vowels.includes(str[i])) {
      count++;
      if (liste.includes(str[i])) {
        continue;
      } else {
        liste.push(str[i]);
      }
    }
  }
  console.log(liste);
}
count_vowels("enter a santince"); */


function count (str) {  
  let vowels = ["a", "e", "i", "o", "u"];
  var count = {};
  for (i = 0; i < str.toLowerCase().length; i++) {
  if (vowels.includes(str[i])){
    str.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;

  }
}
}
console.log(count("enter a string"));
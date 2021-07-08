// Create an application which selects a name randomly from a list. Then we can use it whenever we need.

let names = ['John', 'James', 'Walter', 'Edward'];
function pick(names){
   let x = Math.floor(Math.random()*10);
   console.log(x)
   if(x < names.length-1){
       return names[x];

   }else{
       return "try again"
   }
}
console.log(pick(names)); 
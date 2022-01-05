let arr = [10, 5, 2, 7, 8, 7];
let k = 3;
//(arr.length - k) + 1
let n= arr.length

let maxArr = []
for(let i=0; i< (n-k)+1; i++){
    let newArr = arr.slice(i,i+k)
    console.log(newArr);
    maxArr.push(Math.max(...newArr))
    
}
console.log(maxArr);


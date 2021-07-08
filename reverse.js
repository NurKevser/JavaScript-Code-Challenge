let text = "clarusway"
let newText = ""
for(let i = text.length; i> 0; i--){
    newText += text[i-1]
}
document.write(newText); // console a değil ekrana yazdırır.


//     SOLUTION 2
function rev_str(s){
    return s.split("").reverse().join("");
}
console.log(rev_str("clarusway"));
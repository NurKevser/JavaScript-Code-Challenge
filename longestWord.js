const longestWord = (str) => {
   let longestWord = "";
    str.split(" ").forEach(element => {
        if(element.length > longestWord.length){
            longestWord = element;
        }
    });
    return longestWord
}

console.log(longestWord("yazılım hizmetleri şirketi"));
let str =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
function findAll(str, char) {
  if (str.includes(char)) {
    for (i = 0; i < str.length; i++) {
      if (char === str[i]) {
        console.log(i + ":" + char);
      }
    }
  } else {
    console.log("not match found");
  }
}
findAll(str, "e");

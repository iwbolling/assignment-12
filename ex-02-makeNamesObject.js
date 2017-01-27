// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function makeNamesObject(nameOne,nameTwo,nameThree){
  var namesArray = [nameOne,nameTwo,nameThree];
  var splitName = [];
  var namesObj = {};
  for (i=0;i<namesArray.length;i++) {
    splitName = namesArray[i].split(" ");
    namesObj[splitName[0]] = splitName[1];
  }
  return namesObj;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//------------------- by IWB
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")

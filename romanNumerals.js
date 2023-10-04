function toRomanLazy(num) {
  let output = "";
  let romanNumeralToArabic = {
    'M':1000,
    'D':500,
    'C':100,
    'L':50,
    'X':10,
    'V':5,
    'I':1
      }   

  for (let i of Object.keys(romanNumeralToArabic)) {
    let ind = Math.floor(num/romanNumeralToArabic[i]);
    num-=ind*romanNumeralToArabic[i];
    output+=i.repeat(ind);
  }
 // let romanNumeralPriorityOrder = ['M','D','C','L','X','V','I'];
// for (i in romanNumeralToArabic) {
//   while (num >= romanNumeralToArabic[i]) {
//     output+=i;
//     num-=romanNumeralToArabic[i]

//   }
// }
  return output;
  } 

  // const divider = (numeral) => {
  // output+=Math.floor(numeral/num)
  // num-Math.floor(numeral/num)
  // }
  
  //romanNumeralPriorityOrder.map(divider)
  

console.log(toRomanLazy(100))
function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };

function maxNumber(num) {
  let numStr = num.toString();
  let digitsArray = numStr.split('');

  digitsArray.sort((a, b) => b - a);

  let maxNum = parseInt(digitsArray.join(''));

  return maxNum;
}


let number1 = 215;
console.log(maxNumber(number1));  


let number2 = 1093;
console.log(maxNumber(number2));  

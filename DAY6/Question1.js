function findMaxPurchase(budget, keyboardPrices, mousePrices) {
  let maxPurchase = -1;

  
  for (let i = 0; i < keyboardPrices.length; i++) {
   
    for (let j = 0; j < mousePrices.length; j++) {
      let total = keyboardPrices[i] + mousePrices[j];

      if (total <= budget && total > maxPurchase) {
        maxPurchase = total;
      }
    }
  }

  return maxPurchase;
}

let budget1 = 60;
let keyboardPrices1 = [40, 50, 60];
let mousePrices1 = [5, 8, 12];
console.log(findMaxPurchase(budget1, keyboardPrices1, mousePrices1));  

let budget2 = 10;
let keyboardPrices2 = [3, 1];
let mousePrices2 = [5, 2, 8];
console.log(findMaxPurchase(budget2, keyboardPrices2, mousePrices2));  

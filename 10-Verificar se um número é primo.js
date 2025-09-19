function ehPrimo(numero) {
  if (numero <= 1) {
    return false; 
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false; 
    }
  }

  return true; 
}


console.log(ehPrimo(2));   
console.log(ehPrimo(7));  
console.log(ehPrimo(10)); 

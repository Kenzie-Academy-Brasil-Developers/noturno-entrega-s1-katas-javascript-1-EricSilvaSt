// 01 - Retronar números de 1 a 20.
function oneThroughTwenty() {
    
  let meuRetorno = [];

    for (let contador = 1; contador <= 20; contador++) {
        meuRetorno.push(contador)
    }

    return meuRetorno;
}

console.log(oneThroughTwenty()); 
// esperado retornar [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    



//02 - Retornar números pares de 1 a 20
function evensToTwenty() {
  let meuRetorno = [];

    for (let contador = 2; contador <= 20; contador+=2) {
        meuRetorno.push(contador)
    }

    return meuRetorno;  
}

console.log(evensToTwenty());
// esperado retornar [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]




// 03 - Retornar os números ímpares de 1 a 20.
function oddsToTwenty() {
    
  let meuRetorno = [];

  for (let contador = 1; contador <= 20; contador+=2) {
      meuRetorno.push(contador)
  }

  return meuRetorno; 
   
}
console.log(oddsToTwenty());
// esperado retornar [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]




// 04 -  Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive() {
    
  let meuRetorno = [];

  for (let contador = 5; contador <= 100; contador+=5) {
      meuRetorno.push(contador)
  }

  return meuRetorno; 
   
}
console.log(multiplesOfFive());
// esperado retornar [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]




//05 - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers() {
 
  let meuRetorno = [];
    for (let contador = 1; contador <= 10; contador++) {
      meuRetorno.push(contador * contador)
  }
    return meuRetorno; 
 
  }
  console.log(squareNumbers());
// esperado retornar [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]




// 06 - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards() {

  let meuRetorno = [];
    for (let contador = 20; contador >= 1; contador--) {
      meuRetorno.push(contador)
  }
    return meuRetorno; 
 
  }
  console.log(countingBackwards());
// esperado retornar [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Obs.: bati a cabeça. Anotar que posso utilizar o sinal de subtração duas vezes(--), assim como o de adição (++).





// 07 - Retornar os números pares de 20 até 1.
function evenNumbersBackwards() {
  let meuRetorno = [];
  for (let contador = 20; contador >= 1; contador-=2) {
    meuRetorno.push(contador)
}
  return meuRetorno; 

}
console.log(evenNumbersBackwards());
// esperado retornar [20, 18, 16, 14, 12, 10, 8, 6, 4, 2]





// 08 - Retornar os números ímpares de 20 até 1.
function oddNumbersBackwards() {
  let meuRetorno = [];
  for (let contador = 19; contador >= 1; contador-=2) {
    meuRetorno.push(contador)
}
  return meuRetorno; 

}
console.log(oddNumbersBackwards());
//esperado retornar [19, 17, 15, 13, 11, 9, 7, 5, 3, 1]





// 09 - Retornar os múltiplos de 5 contando de trás para frente a partir de 100.
function multiplesOfFiveBackwards() {
  let meuRetorno = [];

  for (let contador = 100; contador >= 5; contador-=5) {
      meuRetorno.push(contador)
  }

  return meuRetorno; 
   
}
console.log(multiplesOfFiveBackwards());
//esperado retornar [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]




// 10 - Retornar os quadrados perfeitos contando de trás para frente a partir de 100.
function squareNumbersBackwards() {
    
  let meuRetorno = [];
    for (let contador = 10; contador >= 1; contador--) {
      meuRetorno.push(contador * contador)
    }
    return meuRetorno; 
   
  }
  console.log(squareNumbersBackwards());
//esperado retornar [100, 81, 64, 49, 36, 25, 16, 9, 4, 1]

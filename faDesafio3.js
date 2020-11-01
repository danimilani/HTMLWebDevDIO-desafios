let array = Array(5);

let qtdePar = 0;
let qtdeImpar = 0;
let qtdePos = 0;
let qtdeNeg = 0;

  for (let i=0; i<=4; i++) {
    array[i] = parseInt(gets());
    
    //verificar se é par
   if(array[i]%2==0){
     qtdePar++;
   }
   
    //verificar se é impar
   if(array[i]%2!==0){
     qtdeImpar++;
   }
   
     //verificar se é positivo
   if(array[i]>0){
     qtdePos++;
   }
   
     //verificar se é negativo
   if(array[i]<0){
     qtdeNeg++;
   }
  }
   
console.log(`${qtdePar} valor(es) par(es)`);
console.log(`${qtdeImpar} valor(es) impar(es)`);
console.log(`${qtdePos} valor(es) positivo(s)`);
console.log(`${qtdeNeg} valor(es) negativo(s)`);

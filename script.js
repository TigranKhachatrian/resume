
function isPrime(num) {
    if (num === 0 || num === 1) return false;
     if(num % 1 === 0){ 
       
       if(num < 0) num = -num;
       for(let i = 2; i < num;i++){
         if(num % i === 0) return false; 
       }
        alert(num);
       return true;
     }
       
    }

    isPrime(-5);
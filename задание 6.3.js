function getSumArg(number1){
    return function(number2){
      return number1+number2;
    }
  }
  
  console.log(getSumArg(10)(5));
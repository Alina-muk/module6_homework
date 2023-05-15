function getNumberEverySecond (num1,num2){
    const intervalId = setInterval(function(){
        if (num1 <= num2) {
        console.log(num1);
        num1++;
        }
        else clearInterval(intervalId);
     },1000);
    }
    
    getNumberEverySecond(5,15);
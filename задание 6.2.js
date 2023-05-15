function primeNumber(number){
    if ((number < 2) || (number > 1000)) {
        return "Данные неверны";
    } else {
        for (let i = 2; i < number; i++){
            if (number % i === 0) {
                return "не простое";
            }
        }
        return "простое";
    }
}

let randNumber = Math.floor(Math.random() * 2000);
let p = primeNumber(randNumber);
console.log("Число " + randNumber + " - " + p);
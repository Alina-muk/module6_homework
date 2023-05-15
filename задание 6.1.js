let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, null, 'abc', 'qwe'];

function coountEvenOddElements () {
    let elementEven = 0;
    let elementOdd = 0;
    let elementOther = 0;
    let elementZero = 0;

    for (let i = 0; i < arr.length; i++){
        if (typeof(arr[i]) != 'number') {
          elementOther++;
        } else {
            if  (arr[i] === 0) {
              elementZero++;
            } else {
                if (arr[i] % 2 === 0) {
                  elementEven++;
                } else {
                   elementOdd++;
            }
        }
      }
    }
    return [elementEven, elementOdd, elementOther, elementZero];
    }

    let result = coountEvenOddElements (arr);

    console.log("Even - " + result[0]);
    console.log("Odd - " + result[1]);
    console.log("Other - " + result[2]);
    console.log("Zero - " + result[3]);

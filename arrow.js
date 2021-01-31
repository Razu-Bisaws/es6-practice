function doubleIt(num){
    return num * 2;
}

const doubleIt = function(num){
    return num * 2;
}
//  different fuction declaration arrow function
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const different = x - y;
    const result = sum * different;
    return result;
}

const result = add(5, 6);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);
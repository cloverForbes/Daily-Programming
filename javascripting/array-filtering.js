let numbers = [1,2,3,4,5,6,7,8,9,10];

let filteredArray = numbers.filter(n => {
    return n % 2 === 0;
});

console.log(filteredArray);
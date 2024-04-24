function square(array){
    return array.map(number=> number * number);
}

console.log(square([2,4,6,8,10]));

module.exports = square;
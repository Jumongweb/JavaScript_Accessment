const squareArray = require("./squareOfArray.js");

test("Test that function return square of array", ()=>{
    let input = [2,4,6,8,10];
    let output = [4,16,36,64,100];
    expect(output).toEqual(squareArray(input));
})
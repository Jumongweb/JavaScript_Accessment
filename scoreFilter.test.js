const scoreFilter = require("./scoreFilter.js");

test("test that function return score greater than 70 only",()=>{
    let input = [40,60,90,79,80,41,30];
    let output = [90,79,80];
    expect(output).toEqual(scoreFilter(input));
})
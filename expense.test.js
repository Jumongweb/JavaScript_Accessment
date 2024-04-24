const expense = require("./expense.js");

test("test that function calculate all expense", ()=>{
    let jakeExpense = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
    let result = expense(jakeExpense);
    expect(result).toEqual(380);
})
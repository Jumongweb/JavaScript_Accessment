// let expenses = {
//     category: "groceries",
//     amount: 150,
//     diningOut: 100,
//     transportation: 50,
//     entertainment: 80
// }

function expense(expenses){
    let total = 0;
    for(let amount in expenses){
        total += expenses[amount];
    }
    return total;
}

//console.log(expense(expenses));
module.exports = expense;
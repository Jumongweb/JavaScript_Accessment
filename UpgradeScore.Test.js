const upgradeScore = require("./UpgradeScore");

test("Test that score of student increase by the number of point added", ()=>{
    let input = [85, 92, 78, 88, 95];
    let output = [90, 97, 83, 93, 100];
    expect(output).toEqual(upgradeScore(input));
})
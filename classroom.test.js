const classroomTime = require("./classroom.js");

test("Filter time", () => {
    let times = ["9: 00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
    let time = "PM";

    let result = classroomTime(times, time);

    expect(result).toEqual(["1:00PM", "3:00PM", "5:00PM"]);
})
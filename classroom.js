const { boolean } = require("yargs");

function classroom(array){
    

    return array.filter(class=> checkAfternoon(class));
}

function checkAfternoon(time){
    let afternoon = ["12:00PM", "1:00PM", "2:00PM", "3:00PM",];
    let checker = false;
    for (let index = 0; index < afternoon.length; index++){
        if(time == afternoon[index]){
            checker = true;
            return checker;
        }
    }
    return checker;
}
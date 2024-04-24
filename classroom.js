function classroomTime(times, timeToFind){
    return times.filter(time =>{
        for(let letter of time){
            if(time.endsWith(timeToFind)){
                return letter;
            }
        }
    });
}

module.exports = classroomTime;
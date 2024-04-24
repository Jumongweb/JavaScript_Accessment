function getHealthyFood(array){
    let healthyFood = array.filter(name=> name.isHealthy === true)
    for(const food of healthyFood){
        console.log(food.name);
    }
    return healthyFood;
}

module.exports = getHealthyFood;

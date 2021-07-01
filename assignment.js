
//solution-01
function kilometerToMeter(valueInKilo){
    var valueInMeter;
    if(valueInKilo < 0){
        return "Please provide a positive value";
    }
    else{
        // 1 kilometer = 1000 meter
        valueInMeter = valueInKilo * 1000; 
    }
    return valueInMeter;
}


//solution-02
function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop){
    var priceOfWatch;
    var priceOfPhone;
    var priceOfLaptop;
    var totalBudget;
    if(noOfWatch < 0 || noOfPhone < 0 || noOfLaptop < 0){
        return "Please provide a positive value";
    }
    else{
        priceOfWatch = noOfWatch * 50;
        priceOfPhone = noOfPhone * 100;
        priceOfLaptop = noOfLaptop * 500;
        totalBudget = priceOfWatch + priceOfPhone + priceOfLaptop;
    }    
    return totalBudget;
}

//solution-03
function hotelCost(noOfDays){
    var totalCost;
    if(noOfDays<0){
        return "Please provide a positive value";
    }
    else if(noOfDays <= 10){
        totalCost = noOfDays * 100;
    }
    else if(noOfDays <= 20){
        var firstPart = 10 * 100;
        var remainingDays = noOfDays-10;
        var secondPart = remainingDays * 80;
        totalCost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remainingDays = noOfDays - 20;
        var thirdPart = remainingDays * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}

//solution-04
function megaFriend(friendsArray){
    var longName = "";
    if(friendsArray.length == 0){
        return "Array is empty";
    }
    else{
        for(var i=0; i< friendsArray.length; i++){
            if(friendsArray[i].length > longName.length){
                longName = friendsArray[i];
            }
        }
    }
    return longName;
}
const sumAll = function(int1,int2) {
    let smallestInt = int1;
    let biggestInt = int2;

    if (int1 > int2) {
        biggestInt = int1;
        smallestInt = int2;
    };

    let sum = 0;

    for (let i = smallestInt; i <= biggestInt; i++) {
        sum+=i;
    }

};

// Do not edit below this line
module.exports = sumAll;

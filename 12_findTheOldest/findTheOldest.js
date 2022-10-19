const findTheOldest = function(people) {
    let person = people.reduce((eldest, currentPerson) => {
        if ('name' in eldest) {
            const today = new Date().getFullYear();
            const age = !('yearOfDeath' in currentPerson) ? 
                (today - currentPerson.yearOfBirth) : (currentPerson.yearOfDeath - currentPerson.yearOfBirth)
            const eldest_age = !('yearOfDeath' in eldest) ? 
                (today - eldest.yearOfBirth) : (eldest.yearOfDeath - eldest.yearOfBirth);

            eldest = eldest_age >= age ? eldest : currentPerson;
        }
        else {
            eldest = currentPerson;
        };
        
        return eldest;

    }, {})
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;

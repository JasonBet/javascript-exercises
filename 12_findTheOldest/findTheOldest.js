const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = people.reduce((age, person) => {
        let currAge = 0;
        let date = new Date().getFullYear();
        if(person.yearOfDeath) {currAge = person.yearOfDeath - person.yearOfBirth}
        else {currAge = date - person.yearOfBirth};
        
        if(age < currAge) {
            oldestPerson = person;
            return currAge;
        }
        else {return age;}
    }, 0)
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

//functions to generate the type
//functions generate the skill number
//functions to put it together in an employee object

var employeeObject ={};
var skillNumber, skillType;

skillNumber = randomNumber(1,12);

employeeObject["skill level"] = skillNumber;
employeeObject["skill type"] = employeeType();

function employeeType() {
    var x = randomNumber(0,2);
    switch(x) {
        case 0:
            skillType = "Front-End";
            break;
        case 1:
            skillType = "Back-End";
            break;
        case 2:
            skillType = "Logic";
            break;
        default:
            skillType = "Error";
    }
    return skillType;
}

function randomNumber(min, max) {
    return Math.floor((Math.random() * (1 + max - min) + min));
}

module.exports = employeeObject;
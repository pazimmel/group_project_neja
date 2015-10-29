//functions to generate the type
//functions generate the skill number
//functions to put it together in an employee object


var employeeFunction = function() {

    var skillType;
    var employeeObject = {};

    employeeObject.skill_level = randomNumber(1,12);
    employeeObject.skill_type = employeeType();


    function employeeType () {
        var x = randomNumber(0,2);
        switch(x) {
            case 0:
                skillType = "front_end";
                break;
            case 1:
                skillType = "back_end";
                break;
            case 2:
                skillType = "logic";
                break;
            default:
                skillType = "Error";
        }
    return skillType;
    }
    return employeeObject;
};

//var employeeObject = {};
//var skillNumber, skillType;
//
//skillNumber = randomNumber(1,12);
//
//
//employeeObject["skill level"] = skillNumber;
//employeeObject["skill type"] = employeeType();
//
//
//function employeeType () {
//    var x = randomNumber(0,2);
//    switch(x) {
//        case 0:
//            skillType = "Front-End";
//            break;
//        case 1:
//            skillType = "Back-End";
//            break;
//        case 2:
//            skillType = "Logic";
//            break;
//        default:
//            skillType = "Error";
//    }
//    return skillType;
//};

function randomNumber(min, max) {
    return Math.floor((Math.random() * (1 + max - min) + min));
}

module.exports = employeeFunction;
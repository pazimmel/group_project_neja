//module to create employee object

//function to generate type and skill number of employee, returns employee objct
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


function randomNumber(min, max) {
    return Math.floor((Math.random() * (1 + max - min) + min));
}

module.exports = employeeFunction;
/**
 * Created by PaulZimmel on 10/28/15.
 */
//CLIENT SIDE APP.JS!!!!

//declare variables
var project = {};
var employeesObject = {};
var employeesArray = [];
var max;

//initialize employeeObject
employeesObject.employees = employeesArray;
employeesObject.logic = 0;
employeesObject.front_end = 0;
employeesObject.back_end = 0;

//document ready
$(document).ready(function() {

    $(".GP-button").on('click', function () {
        generateProject();
        appendProject();
    });

    $(".GE-button").on('click', function () {

        ajaxCall();
    });

});

//AJAX CALL FUNCTIONS
//get one employee
function ajaxCall(){

    $.ajax({
            type: "GET",
            url: "/employee",
            success: function(data) {
                employeesArray.push(data);

                updateSkillLevel(data);
                checkProject();
            }
    });
    return employeesObject;
}

//OPERATIONAL FUNCTIONS
//function to generate project
function generateProject() {

    //logic key assigned random number between 10-60
    project.logic = randomNumber(10,60);
    //FE key assigned random number between 10-60
    project.front_end = randomNumber(10,60);
    //BE key assigned random number between 10-60
    project.back_end = randomNumber(10,60);

    return project;
    //if you click quickly this function returns the same project object. DEBUG!
}

//updates the total skill level of total employees
function updateSkillLevel(data){

    for (property in employeesObject){
        if (property == data.skill_type) {
            employeesObject[property] += data.skill_level;
        }
    }
    return employeesObject;

}

//function to see if we need another employee
function checkProject () {

    if (employeesObject.logic == 0 || employeesObject.front_end == 0 || employeesObject.back_end == 0){
        ajaxCall();
    } else{
       calculateCompletionTime();
        appendTime();
    }
    return employeesObject;
}

//function to calculate the time to complete the project
function calculateCompletionTime(){
    var jobs = ["back_end", "front_end", "logic"];
    var jobCompletion = [];
    max = 0;
    for (var i =0;i<jobs.length; i ++) {
        jobCompletion.push(Math.ceil((project[jobs[i]])/(employeesObject[jobs[i]])));
        max = Math.max(max, jobCompletion[i]);
    }

    return max;

}

//APPEND FUNCTIONS
function appendProject() {
    $(".project").remove();
    $(".time").remove();
    var $el = "<div class ='project jumbotron container'>"+
        "<div class = 'data col-md-4'>Front End Needed: "+ project.front_end +"</div>" +
         "<div class = 'data col-md-4'>Back End Needed: " + project.back_end +"</div>" +
        "<div class = 'data col-md-4'>Logic Needed: " +project.logic +"</div></div>";
    $("#projectContainer").append($el);
}

function appendTime(){
    $(".time").remove();
    $ele = "<div class ='time well container'>"+
        "<div class = 'col-md-4 col-md-offset-4'>Weeks to complete project: "+ max +"</div></div>";
    $("#completionTime").append($ele);
}

////UTILITY FUNCTIONS
function randomNumber(min, max) {
    return Math.floor((Math.random() * (1 + max - min) + min));
}
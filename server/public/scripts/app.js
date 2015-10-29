/**
 * Created by PaulZimmel on 10/28/15.
 */
//CLIENT SIDE APP.JS!!!!

//document ready

//click listener for generate project
    //clear DOM of project and employee data
    //generate project
        //3 types, 1 number for each type(1-12)
        //conditions created for finishing project, objects or arrays made to check against
    //project types and their numbers are appended to the DOM

//click listener for generate employees
    //generate a employee
        //get ajax call to server side app.js for a employee
        //enter that info somewhere
    //checks if we have enough employees to finish project
        //if not enough employees(1 FE, 1 BE, 1 Log) to finish project,
            // call again
        // if enough employees
            //calculate time to left to complete
     //append all the employees and time to complete to the DOM
//employeeObject = {
    //employees: [employeeArray with each employee object as element]
    //number of employees: employeeArray.length
    //total logic: for each employee in employeeArray, sum of logic skill
    //total FE: for each employee in employeeArray, sum of FE skill
    //total BE: for each employee in employeeArray, sum of BE skill


//init
    //project object //do we want this appended to the DOM?
        //FE property
        //BE property
        //logic property

    //employees object

        //array for all the employees
        //amount of logic from employees
        //amount of FE from employees
        //amount of backend from all employees

//enable
    ////click listener to generate project
    //click listener to get employee(should be unusable until we generate project)

// click listener to generate project object
    //generate 1 random number between 10-60 for each property of project object
    //flip the switch to turn on employee click listener(no idea how to do this!)

//click listener to get employee
    //append to DOM variable or something is off or false

    //get employee with ajax call
        //success
            //add employee to employees array in employee object
            //update overall employee info
                //increase appropriate employeeObject property
                //a switch for each type?
            //checked whether to call more employees or not
            //calculate time left to complete project

            //determine whether to get another employee or append DOM(0 or 1)
                //if employeesObject.ready = false

        //append DOM
            //put stuff on DOM
            //change to 0
    //
var project = {};
var employeesObject = {};
var employeesArray = [];
//var projectArray = [];
var max;

employeesObject.employees = employeesArray;
employeesObject.logic = 0;
employeesObject.front_end = 0;
employeesObject.back_end = 0;

$(document).ready(function() {

    $(".GP-button").on('click', function () {
        generateProject();
        appendProject();
    });

    $(".GE-button").on('click', function () {

        ajaxCall();
        //console.log("ajaxcall is done");
    });

});

function generateProject() {

     //logic key assigned random number between 10-60
        project.logic = randomNumber(10,60);
    //FE key assigned random number between 10-60
        project.front_end = randomNumber(10,60);
    //BE key assigned random number between 10-60
        project.back_end = randomNumber(10,60);

    console.log(project.logic, " ", project.front_end, " ", project.back_end);
    return project;
    //if you call this function quickly, it returns the same project object. DEBUG!
}

//ajax call to server for an employee
function ajaxCall(){

    $.ajax({
            type: "GET",
            url: "/employee",
            success: function(data) {
                employeesArray.push(data);

                updateSkillLevel(data);
                checkProject();
                //return data;
            }
    });
    return employeesObject;
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
        //console.log("you don't have enough people to complete a project");
        //console.log(employeesObject.logic, " ", employeesObject.front_end, " ",employeesObject.back_end);
        ajaxCall();
    } else{
        console.log("current project skill per week");
        console.log("logic ", employeesObject.logic, "front end ", employeesObject.front_end, "back end ",employeesObject.back_end);
        var y = calculateCompletionTime();
        console.log("weeks to finish project ",y);
        appendTime();
    }
    console.log("get out of check");
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
    console.log(jobCompletion);
    console.log(max);
    return max;

}

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
    var $el = "<div class ='time well container'>"+
        "<div class = 'col-md-12'>Weeks to complete project: "+ max +"</div></div>";
    $("#completionTime").append($el);
}
//utility function
function randomNumber(min, max) {
    return Math.floor((Math.random() * (1 + max - min) + min));
}
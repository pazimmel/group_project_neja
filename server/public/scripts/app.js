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

            //calculate time left to complete project

            //determine whether to get another employee or append DOM(0 or 1)
                //if employeesObject.ready = false

        //append DOM
            //put stuff on DOM
            //change to 0
    //



$(document).ready(function(){
    $(".GE-button").on('click', function(){

    $.ajax({
            type: "GET",
            url: "/employee",
            success: function(data) {
                console.log(data);
            }
        }
    )
    });
});
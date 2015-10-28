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
    //property types and their numbers are appended to the DOM

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

$(document).ready(function(){
    console.log("Hello Ajax");
    $.ajax({
            type: "GET",
            url: "/employee",
            success: function(data) {
                console.log(data);
            }
        }
    )
});
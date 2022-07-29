// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    name:"title",
    message:"What is the title of your project?"
},
{
    type:'list',
    name:'license',
    message:"What license do you need?",
    choices:['Apache 2.0','BSD','MIT','none']
},
{  type:"input",
    name:"descr",
    message:"Write a description of your project"
},
{  type:"input",
    name:"install",
    message:"Include installation instructions"
},
{  type:"input",
    name:"usage",
    message:"Describe the use case for this product"
},
{  type:"input",
    name:"contrib",
    message:"Enter any contributing guidelines"
},
{  type:"input",
    name:"tests",
    message:"Enter any tests for the app"
},
{ type:"input",
    name:"github",
    message:"What's your github?"
},
{  type:"input",
    name:"email",
    message:"Enter your email address"
}
]

// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
       fs.writeFile('Readme.MD', generateMarkdown(answers), (error)=>{
        if (error){
            throw(error)
        }
        else {console.log("File has been created") };
       } )
        console.log(answers)
    })
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter title of project.",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of the project.",
        name: "description"
    },
    {
        type: "input",
        message: "How should dependencies be installed?.",
        name: "install",
        default: "npm install"
    },
    {
        type: "input",
        message: "How should tests be run?.",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What is the use-case of this project?",
        name: "use",
    },
    {
        type: "input",
        message: "How can others contribute?",
        name: "contribute"
    },
    {
        type: "list",
        message: "Licensing for your project",
        name: "license",
        choices: [
            "Apache 2.0",
            "Creative Commons 1.0",
            "MIT",
            "GNU v3",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        message: "What is your Github?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
];

//Ask and answer
const askAndanswer = () => {
    return inquirer.prompt(questions);
}

//Write File
const write = (file, data) => {
    fs.writeFile(file, data, function(err) {
        if (err) {
            console.log("ReadMe.md not created");
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
const init = async () => {
    try {
        console.log("Welcome to the Readme Generator")
        //ask questions
        const ask = await askAndanswer();
        //get readme content
        const readmeContent = generateMarkdown(ask);
        //make ReadMe.md
        await write("./ReadMe.md", readmeContent);
        console.log("ReadMe.md created in root folder!");
    }

    catch (err) {
        console.log("ReadMe.md not created");
        console.log(err);
    }
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title:',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Description:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation Instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select your License:',
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'username',
        message: 'GitHub Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
console.log('Welcome to README Creator! Please follow the prompts below')

inquirer.prompt(questions).then((answers) => {
    console.log(answers)
})
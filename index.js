// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
        name: 'username',
        message: 'GitHub Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your License:',
        choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Contribution Guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions:',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) { 
    fs.writeFile('README.MD', data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}
// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to README Creator! Please follow the prompts below')

    inquirer.prompt(questions).then((answers) => {
        let content = markdown.generateMarkdown(answers);
        writeToFile(content);
    })
}

// Function call to initialize app
init();

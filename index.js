// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const { type } = require('os');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the title of your project',
        },
        {
            type: 'input',
            name:'description',
            message:'describe your project in detail',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'provide instructions on how to install project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'describe what your project will be used for' ,  
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'provide contribution guidelines',
        },
        {
            type: 'input',
            name: 'test',
            message: 'provide instructions on how to test your project',
        },
    ])

// TODO: Create a function to write README file
const generateReadME = ({title, description, installation, usage, contribution,test}) =>
`# ${title}

## Table of Contents

- [Description](#decription)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contributions)
- [Test](#test)


## Decription

bash
${description}

## Installation
bash
${installation}

## Usage

bash
${usage}

## Contributions
bash
${contribution}

## Test
bash
${test}

`
fs writeToFile('readme.md', generateReadME) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');
const generateSVG = require('./lib/generateSVG');

class Svg {
    constructor() {

    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Please enter up to 3 characters',
        validate: value => value.length > 3 ? 'Input must be 3 characters or less' : true,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to do?',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('SVG logo created!')
    )
}

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile('logo.svg', generateSVG(data));
            console.log(data)
        })
}

init();
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

class Svg {
    constructor() {

    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Please enter up to 3 characters',
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
        message: 'What color would you like the shape?',
    }
]
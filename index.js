const inquirer = require('inquirer');
const fs = require('fs');
const { Shapes, Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT: Please enter up to 3 characters',
        validate: text => text.length > 3 ? 'Input must be 3 characters or less' : true,
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

function generateShapes(data) {
    let userInput = data.shape;
    if (userInput === "Circle") {
        let circleInput = new Circle(data.text, data.textColor, data.shape, data.shapeColor);
        return circleInput.render();
    } else if (userInput === "Triangle") {
        let triangleInput = new Triangle(data.text, data.textColor, data.shape, data.shapeColor);
        return triangleInput.render();
    } else if (userInput === "Square") {
        let squareInput = new Square(data.text, data.textColor, data.shape, data.shapeColor);
        return squareInput.render();
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('SVG logo created!')
    )
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('logo.svg', generateShapes(data));
            console.log(data)
        })
}

init();
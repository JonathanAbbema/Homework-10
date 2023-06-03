const {Shape, Circle, Square, Triangle} = require('./shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter a max of 3 characters for the logo',
        validate: (input) => input.length <= 3, 
        
    },
    {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color it may be a keyword or hex',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
    type: 'input',
    name: 'ShapeColor',
    message: 'Enter a shape color it may be a keyword or hex',
    },
];

inquirer.prompt(questions).then((answers) => {
    const {text, textColor, shape, ShapeColor } = answers;
    const shapeObj = new Shape();
    let svgElement = '';

    shapeObj.setColor(ShapeColor);

    switch (shape) {
        case 'Circle':
            const circle = new Circle();
            circle.setColor(ShapeColor);
            svgElement = circle.render();
            break;
        case 'Square': 
            const square = new Square();
            square.setColor(ShapeColor);
            svgElement = square.render();
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(ShapeColor);
            svgElement = triangle.render();
            break;
    };
    let x = 150, y=120;
    if (shape === "Triangle") {
        y=135;
    } else if (shape === "Square") {
        y=145;
    }
    const finalSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgElement}
    <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${text}</text> </svg>`;

    fs.writeFileSync('logo.svg', finalSvg);
    console.log('Your logo.svg has been generated');
});
const inquirer = require('inquirer');
const generateSVG = require('./generateSVG')
const fs =require('fs');


function init () {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters for the logo:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape:'
        }
    ];
    inquirer.prompt(questions).then(function(answers) {
        if (answers.shape == 'circle') {
            answers.shape = `<circle cx="150" cy="100" r="80"`
        } else if (answers.shape == 'triangle') {
            answers.shape = `<polygon points="150,0 60,160 240,160"`
        } else if (answers.shape == 'square') {
            answers.shape = `<rect x="85" y="35" width="130" height="130"`
        }
2 
        const svgText = generateSVG(answers);
        fs.writeFile('output/logo.svg', svgText, (err) =>
      err ? console.log(err) : console.log('Successfully created SVG logo!')
    );
    });
};

module.exports = init;
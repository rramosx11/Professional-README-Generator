// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const { rejects } = require("assert");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: `What is the title of your project?`,
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "what",
    message: "What is your project and what problem will it solve? (Required)",
    validate: (whatInput) => {
      if (whatInput) {
        return true;
      } else {
        console.log("Please enter what your project is!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "why",
    message: "Why did you create this project? (Required)",
    validate: (whyInput) => {
      if (whyInput) {
        return true;
      } else {
        console.log("Please enter why you created this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "how",
    message: "How will someone use this? (Required)",
    validate: (howInput) => {
      if (howInput) {
        return true;
      } else {
        console.log("Please enter what your project is!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide step-by-step installation instructions for your project. (Required)",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter your installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter your use instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["agpl", "apache", "mit", "no license"],
  },
  {
    type: "confirm",
    name: "confirmContributers",
    message: "Would you like to allow other developers to contribute?",
    default: true,
  },
  {
    type: "input",
    name: "contribute",
    message: "Please provide guidelines for contributing. (Required)",
    when: ({ confirmContributers }) => {
      if (confirmContributers) {
        return true;
      } else {
        return false;
      }
    },
    validate: (contributerInput) => {
      if (contributerInput) {
        return true;
      } else {
        console.log("Please enter contributer guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to test the app. (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter your use test instructions!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileNafme, data) {}

const fileContent = (fileContent) => {
  try {
    fs.writeFileSync("./README-md", fileContent);
  } catch (err) {
    console.error(err);
  }
};
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const markdown = generateMarkdown(data);
    fileContent(markdown);
  });
}

// Function call to initialize app
init();

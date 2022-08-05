// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
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
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: `What is the title of your project?`,
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please write a short description of your project!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: [
      { name: "AGPL", value: "agpl" },
      { name: "Apache", value: "apache" },
      { name: "MIT", value: "mit" },
      "no license",
    ],
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies??",
    default: "npm i",
  },
  {
    type: "input",
    name: "contribute",
    message: "What does the user need to know about contributing to the repo?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileNafme, data) {}

const fileContent = (fileContent) => {
  try {
    fs.writeFileSync("./generated-README-md", fileContent);
  } catch (err) {
    console.error(err);
  }
  console.log("File Created!");
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

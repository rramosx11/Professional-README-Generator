// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![License: MIT](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `
  * [License](https://choosealicense.com/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
  ## [License](#table-of-contents) 
    
  This project is licensed under the 
  ${license} license.
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseBadge(data.license)}

  ## [Description](#table-of-contents)

  ${data.description}

  ## Table-of-Contents

  * [Installation](#description)
  * [Usage](#usage)
    ${renderLicenseLink(data.license)}
  * [Contributing](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Installation](#table-of-contents)

  To install necessary dependencies, run the following command:<br>
    ${data.install}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)

  ${data.contribute}

  ## [Tests](#table-of-contents)

  To run tests, run the following command:<br>
    ${data.tests}

  ## [Questions](#table-of-contents)

  If you have any questions about the repo, open an issue or contact me directly at my email - [${
    data.email
  }](mailto:${data.email}).<br>
  You can find more of my work at my [GitHub](https://github.com/${
    data.github
  }).
`;
}

module.exports = generateMarkdown;

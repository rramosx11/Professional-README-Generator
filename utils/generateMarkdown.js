// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## [Description](#table-of-contents)

  ${data.description}

  ## Table-of-Contents

  * [Installation](#description)
  * [Usage](#description)
  
  * [Contributing](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Installation](#table-of-contents)

  ${data.install}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ## [Contributing](#table-of-contents)

  ${data.contribute}

  ## [Tests](#table-of-contents)

  ${data.tests}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:
  [GitHub](https://github.com/${data.github})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

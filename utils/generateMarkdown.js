// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let link = renderLicenseLink(license)
    switch(license) {
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${link})`;
            break;
        case "Apache":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${link})`
            break;
        case "GPL":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${link})`
            break;
        default:
            return "";
    }
}

console.log(renderLicenseBadge("MIT"))

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license) {
        case "MIT":
            return "https://opensource.org/licenses/MIT";
            break;
        case "Apache":
            return "https://opensource.org/licenses/Apache-2.0"
            break;
        case "GPL":
            return "https://www.gnu.org/licenses/gpl-3.0"
            break;
        default:
            return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    console.log("renderlicensesec:"+license)
    let badge = renderLicenseBadge(license);
    console.log("renderbadge: " +badge)
    let link = renderLicenseLink(license);
    console.log("renderlinke: " +link)
    return `## License
${badge}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
## Description
${data.desc}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}

## Credits
### Github Username
${data.username}
### Email
${data.email}

${licenseSection}

## How to Contribute
${data.contribute}

## Tests
${data.tests}
  `;
}

module.exports = {generateMarkdown};

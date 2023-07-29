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

function renderLicenseSection(license) {
    console.log("renderlicensesec:"+license)
    let badge = renderLicenseBadge(license);
    console.log("renderbadge: " +badge)
    let link = renderLicenseLink(license);
    console.log("renderlinke: " +link)
    return `## License
${badge}`
}

function renderGitHub(profile) {
    if (profile !== "") {
        return `### Github
[${profile}](https://github.com/${profile})`;
    } else {
        return "";
    }
}

function renderEmail(email) {
    if (email !== "") {
        return `### Email
[${email}](${email})`;
    } else {
        return "";
    }
}

function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);
  let userProfile = renderGitHub(data.username);
  let userEmail =  renderEmail(data.email);

  return `# ${data.title}
## Description
${data.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${userProfile}
${userEmail}

${licenseSection}

## How to Contribute
${data.contribute}

## Tests
${data.tests}
  `;
}

module.exports = {generateMarkdown};

function renderTitleSection(title) {
    console.log("Rendering Title.....");
    if (title !== "") {
        return `# ${title}`;
    } else {
        return "# Title";
    }

}

function renderDescriptionSection(desc) {
    console.log("Rendering Description.....");
    return `## Description
${desc}`;
}

function renderTableSection() {
    console.log("Rendering Table of Contents.....");
    return `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)`;
}

function renderInstallationSection(install) {
    console.log("Rendering Installation Instructions.....");
    return `## Instructions
${install}`;
}

function renderUsageSection(usage) {
    console.log("Rendering Usage Instructions.....");
    return `## Usage
${usage}`;
}

function renderGitHub(profile) {
    console.log("Rendering GitHub Section.....");
    if (profile !== "") {
        return `### Github
[${profile}](https://github.com/${profile})`;
    } else {
        return "";
    }
}

function renderEmail(email) {
    console.log("Rendering Email.....");
    if (email !== "") {
        return `### Email
[${email}](${email})`;
    } else {
        return "";
    }
}

function renderCreditsSection(profile, email) {
    console.log("Rendering Credits.....");
    let userProfile = renderGitHub(profile);
    let userEmail =  renderEmail(email);

    return `## Credits
${userProfile}
${userEmail}`
}

function renderLicenseBadge(license) {
    console.log("Rendering License Badge.....");
    let link = renderLicenseLink(license);
    switch(license) {
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${link})`;
            break;
        case "Apache":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${link})`;
            break;
        case "GPL":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${link})`;
            break;
        default:
            return "";
    }
}

function renderLicenseLink(license) {
    console.log("Rendering License Link.....");
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
    console.log("Rendering License Section.....");
    let badge = renderLicenseBadge(license);
    return `## License
${badge}`
}

function renderContributeSection(contribute) {
    console.log("Rendering Contribution Instructions.....");
    return `## How to Contribute
${contribute}`;
}

function renderTestsSection(tests) {
    console.log("Rendering Test Instructions.....");
    return `## Tests
${tests}`;
}

function generateMarkdown(data) {
  console.log("Generating Markdown.....");
  let titleSection = renderTitleSection(data.title);
  let descSection = renderDescriptionSection(data.desc);
  let tableSection = renderTableSection();
  let installSection = renderInstallationSection(data.install);
  let usageSection = renderUsageSection(data.usage);
  let licenseSection = renderLicenseSection(data.license);
  let creditsSection = renderCreditsSection(data.username, data.email);
  let contributeSection = renderContributeSection(data.contribute);
  let testsSection = renderTestsSection(data.tests);

  return `${titleSection}
${descSection}
${tableSection}
${installSection}
${usageSection}
${creditsSection}
${licenseSection}
${contributeSection}
${testsSection}
  `;
}

module.exports = {generateMarkdown};

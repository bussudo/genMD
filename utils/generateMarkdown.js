// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
    return  
    "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)] " ;
    case 'BSD':
      return
    "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)] "; 
    case 'MIT':
      return
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)" ;  
    default:
      return "" ;    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
function renderLicenseLink(licLink) {
    switch (licLink) {
      case 'Apache 2.0':
      return  
     "(https://opensource.org/licenses/Apache-2.0)";
      case 'BSD':
      return
        "(https://opensource.org/licenses/BSD-2-Clause) "; 
    case 'MIT':
      return
        "(https://opensource.org/licenses/MIT)";  
    default:
      return "" ;   
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licSec) {
  ${license}
  ${licLink}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, descr, license, install, usage, email, contrib, tests, github})   
{return `# ${title}

${renderLicenseBadge(license)}

## ${descr}

## Table of Contents

- [Installation]{#install}
- [Usage]{#usage}
- [Contributing]{#contrib}
- [License]{#license}
- [Test]{#tests}
- [Questions]{#Questions}

## Installation
${install}

## Usage
${usage}

## Contributing
${contrib}

## License
${license}

## Tests
${tests}

## Questions
If you have any questions, please contact me through my github ${github} or email me at ${email}.
  `
}
module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
    return  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ";
    case 'BSD':
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) "; 
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" ;  
    default:
  return "" ;    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
return ""
  }
  else{
    return "- [License](#license)"
  }
}
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'none') {
  return ""
}
else{
  return `## License  
  This project is built on ${license} license `
}
}
// TODO: Create a function to generate markdown for README

function generateMarkdown({title, descr, license, install, usage, contrib, tests, github, email})  { 
return `# ${title}

${renderLicenseBadge(license)}

## ${descr}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
${renderLicenseLink(license)}
- [Tests](#tests)

## Installation

${install}

## Usage

${usage}

## Contributing

${contrib}

${renderLicenseSection(license)} 

## Tests

${tests}

## Questions
If you have any questions, please contact me through my 
github [${github}] or email me at [${email}](mailto:${email}).
  `
}
module.exports = generateMarkdown;
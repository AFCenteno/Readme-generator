const licensebadges = {
  "Apache 2.0": "[![License: Apache 2.0]([![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))",
  "Creative Commons 1.0": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "MIT" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "GNU v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "Mozilla Public License 2.0" : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.license = licensebadges[data.license];

  return `# ${data.title}
    ${data.license}

    ## Description
    ${data.description}

    ##Table of Contents
    [Install](#Install)
    [Use](#Use)
    [License](#License)
    [Contribute](#Contribute)

    ## Install
    Install dependencies by runnning the following:
    \`${data.install}\`

    ## Use
    ${data.use}

    ## Contribute
    ${data.contribute}

    ## Tests
    To test, run the following:
    \`${data.tests}\`

    ## License
    This project is covered by the ${data.license} license.

    ##Questions
    Any questions? Feel free to reach out to me at my Github: ${data.github} or via my email ${data.email}
  `;
}

module.exports = generateMarkdown;

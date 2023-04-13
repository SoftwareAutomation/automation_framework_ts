<h2 align="center"> ServiceAutomation.IO </h2>
<h2 align="center"> Mobile, Web, API, Backend, Test Automation Framework, Written in TypeScript </h2>

<h4 align="center">

[![WEB CI](https://github.com/sadabnepal/WebdriverIOTypeScriptE2E/actions/workflows/web.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOTypeScriptE2E/actions/workflows/web.yml)

[![API CI](https://github.com/sadabnepal/WebdriverIOTypeScriptE2E/actions/workflows/api.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOTypeScriptE2E/actions/workflows/api.yml)

</h4>

#### Requirements
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://docs.docker.com/engine/install/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)
[![Appium-Inspector](https://img.shields.io/badge/-Appium%20Inspector-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium-inspector/releases)
[![AndroidStudio](https://img.shields.io/badge/-Android%20Studio-3DDC84?logo=android-studio&logoColor=white)](https://developer.android.com/studio)

#### Clone Repository
```bash
1. https://github.com/SoftwareAutomation/automation_framework_ts
2. Navigate to `automation_framework_ts`
```
-----

### Interactive CLI to run test:
> Before proceeding with the actual test, ensure that the mobile setup has been completed if the mobile option has been selected as the CLI option. For the setup instructions, refer to the [Mobile Test](#Mobile-Test) section. Additionally, the presence of the "node_modules" folder will be validated, and if it is not found, the installation process will be initiated before any further steps are taken.
>

Starting the Application:
```bash
npm start
```
It start wizard with test module options, based on user selection either of the below module will start <b>locally</b> or inside <b>docker container</b>. Code to control wizard and user selection is available in 'start.js' which is built using [enquirer](https://www.npmjs.com/package/enquirer) node package.<br>
<b>Test Module Options : </b> | UI | API | Mobile | <br>
![cli_demo](https://user-images.githubusercontent.com/65847528/152398324-b0e44fd0-acdf-4f5e-b762-acb53a9f361c.gif)


-----

### Web Test
Install dependencies:
> To execute the following command, go to the "web" directory first.
```bash
npm install
```

Create the .env file:<br>
To set up the .env file, create a file named .env within the web folder, and update its contents by referring to the .env.example file.

To execute the test locally:
> The test will run in HEADLESS mode by default.
> To see the test running in a browser, update the MODE=LOCAL value in the .env file.
```bash
npm test             [ Mocha tests ]
npm run test:e2e     [ Cucumber BDD tests ]
```

To execute the test in Docker:
```bash
npm run test:docker       [ Mocha tests]
npm run test:e2e:docker   [ Cucumber BDD tests ]
```
> The Pre and Post script will automatically handle the start and stop of Docker containers.
> If containers does not stop automatically run "docker-compose down" command.
> In case the containers fail to stop automatically, execute the "docker-compose down" command.

To generate a report:
```bash
npm run report:mocha
npm run report:cucumber
```

Paths to the report:
```bash
mocha: web/mochawesome-report/mochawesome-report.html
cucumber: web/reports/cucumber/cucumber-report.html
```

The send a report:
> Refer to the .env.example file and update the details in the .env file accordingly.
```bash
npm run mailCucumberReport
npm run mailMochaResult
```
-----

### API Test
Installing dependencies:
> To execute the following command, go to the "api" directory first.
```bash
npm install
```

The run the test:
```bash
npm test
```

The paths to the reports:
```bash
api/reports/mochawesome.html
```

-----

### Mobile Test

To set up Appium, please refer to the Appium SetUp README by clicking on [this link:](/mobile/README.md)

To install dependencies:
> To execute the following command, go to the "mobile" directory first.
```bash
npm install
```

To execute in a local environment:
> Before initiating the mobile test, ensure that the Android Virtual Device is up and running.
```bash
npm run test  [ Mobile tests ]
```

To generate a report:
```bash
npm run report
```

The report paths:
```bash
mobile: mobile/reports/mobile.html
```

-----

#### Features:
    - Mobile, Web, API, Backend, Test Automation Framework, Written in TypeScript 
    - Uses Mocha and Cucumber frameworks for a [Business-Driven Development] (https://softwareautomation.io/business-driven-develop) approach.
    - Integration of VNC with Docker, allowing for graphical user interface (GUI) access to Docker containers.
    - Concurrent execution of multiple tasks or processes at the same time.
    - Testing for compatibility across multiple web browsers.
    - [Page Object Design pattern](https://softwareautomation.io/page-object-model)
    - Automatic retrying a failed test to ensure that it passes on subsequent attempts.
    - Including screenshots of failed tests in reports to provide visual context and facilitate debugging.
    - Github actions & CICD Integration (Work in Progress)
    - Automatically distributing test reports to a designated list of email recipients.
    - Utilizing specific data types for method parameters to optimize performance and efficiency.
    - Enhanced import statement functionality through the utilization of tsconfig paths.

#### Tech stacks:
[![WebdriverIO](https://img.shields.io/badge/-WebdriverI/O-EA5906?logo=WebdriverIO&logoColor=white)](https://webdriver.io/)
[![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?logo=Mocha&logoColor=white)](https://mochajs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![CucumberIO](https://img.shields.io/badge/-Cucumber.io-brightgreen?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-FEDABD?logo=Chai&logoColor=black)](https://www.chaijs.com/)
[![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?logoColor=white)](https://github.com/enquirer/enquirer)
[![Appium](https://img.shields.io/badge/-Appium-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://www.docker.com/)
[![Node-Mailer](https://img.shields.io/badge/-Node%20Mailer-89D05C?logo=gmail&logoColor=blue)](https://github.com/nodemailer/nodemailer)
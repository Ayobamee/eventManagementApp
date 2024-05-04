# cypress-cucumber-boilerplate-for-e2e-testing

<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQF1dg2KtKFdPg/company-logo_200_200/0/1626295436859?e=2159024400&v=beta&t=Ib_T9PXXQxkHRKnj3Oe65EKuR6EAh01IgAA6IGvU0FY" alt="exemplo imagem">

> Cypress 10+ with Cucumber boilerplate project.

### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] https://github.com/cucumber/json-formatter
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Java 8 for Allure Reporter
3. Optional: Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)

## 🚀 Install the project

Install project dependencies with: npm i

## Run the demo:

1. Standard Execution: npm run cypress:execution
2. Native report(with JSON FORMATTER): Check how to do it in this video: [Cucumber BDD Report - YouTube](https://www.youtube.com/watch?v=5AGXK9cL2fs&t=2s&ab_channel=JoanMedia)
3. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
   4. You'll get a report like this one: GitHub Page - Allure Report Sample: https://joanesquivel.github.io/cypress-cucumber-boilerplate/


##  Sample repo to generate an allure report as an artifact using GH Actions

* https://github.com/SeyiOG/newCyLearn2/blob/main/.github/workflows/cypress-allure-report.yml



#Issues with first time installation/execution of the cypress on mac using default project from my Github and solution
1. Ensure you are running node version v18.19.1, to check this go to terminal and run the commnad node -v, if a lower node version is shown run nvm install 18 , if you had an old version eg 15 run nvm uninstall 15 and install 18 and run nvm use 18.
2. Navigate to project and update the preprocessor by running npm install @badeball/cypress-cucumber-preprocessor@latest --save-dev
3. Remove the node modules, by navigating to the file directory and deleting the node module folder.
4. Run npm install, and reinstall the node modules.
5. Run npx cypress open and run your tests.
6. Ensure that your variable in your Secrets in Github actions aligns with how you call it in your .yml ie if you use CYPRESS_USERNAME in secrets, in the .yml it should be called using secrets.CYPRESS_USERNAME, if the names do not match, you would have issues running your tests.
7. Use 'git remote remove origin' to remove origin if you need to

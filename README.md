Project overview

Project name : Lilla grocery shop

Contributors:
toriqul007 (Toriqul Islam)
solaiman2021 (Md Solaiman Islam)
shopnobaz (Jahedur Rahman)
nahidalamgh (Md Nahid Alam)



We started with Discussing  the project and delegating our tasks. The goal is to create a webshop which has a  shopping cart and the ability to complete purchases and then empty the shopping cart. The way of our communication is mainly physical meeting and working together as well as following our Trello board to fulfill our sprint goals. 

Creating git repository:

Our GitHub created with  following branching strategy:
● Main branch (for production code which will go live )
● Dev branch (default branch) for the development version of the product.
● Test ( test branch will add different features from different feature brunches)
● Feature for feature development.
● Dev and main must be protected
To start with our project you need to clone our code and open with Visual Studio and install the necessary packages such as node.js, npm, new man, jest, wdio etc.

Avoid conflicts:

To avoid conflicts we don’t work in Dev and Main branches, instead we create another branch based on Dev or Main to add a new feature, to add new tests or bug fix. 

Protections rules:

We use protection rules for our branches. Whenever there will be a change, push or pull request from other branches, the code-owner/ reviewer must check and accept it.

Testing:

To run our tests we used three different test methods

● To check our front-end code (methods in classes) working as it should be we perform unit tests  with Jest.
● For our  REST API (including ACL) we write the test with PostMan and run with NewMan.
● To test our user interface we write scenarios with Gherkin, run with Cucumber, use Webdriver.IO (or Selenium) to control a headless browser. 

To perform these tests we use terminal commands
First run the server with the command npm start
● For Unit testing the command is npm run test and this test can be performed without running the project.
● For GUI test with headless browser run the command npm run wdio
● For endpoint test with newman run the command npm api-test

CI (Continuous Integration by Github Action)

These tests are gathered and automated to run in the workflow called test.yml

The automated tests need to pass for a merge into our protected branches main and dev to be approved. 

CD(Continuous Deployment by Github action)

We are using the digital ocean to run our servers. We deploy to these servers using the workflow file. Deployment happens automatically if all tests succeed but deployment to the production server requires approval from the codeowner. 

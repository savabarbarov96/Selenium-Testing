# JS-Testing-template

Setup Selenium Webdriver

1.	Install Node.JS and NPM
https://nodejs.org/en/ - Link  (We can check version from CMD terminal by typing Node –v)
2.	 Create new test project folder
3.	Open CMD terminal and navigate to the directory of the folder (cd /path/)
4.	Once navigated type in npm init
5.	Install Selenium WebDriver https://www.npmjs.com/package/selenium-webdriver 			/Type in npm install selenium-webdriver into the CMD terminal/
6.	Set up PATH Environmentals 
Method 2: Setting ChromeDriver Path in Windows Environment Variables
•	Step 1: Go to My Computer and Right click to get the context menu.
 MyComputer Properties
•	Step 2: Click on the Change Setting on the opened window.
 Change Settings
•	Step 3: Click on Advance tab and click on Environment Variables.
 
•	Step 4: Select Path under System Variables and click on Edit.
 
•	Step 5: At the end of the string use semicolon and paste the path of the ChromeDriver. On my machine my ChromeDriver exe resides in D:\Drivers\

7.	 Path

8.	Npm install chromedriver and npm install geckodriver

9.	Install Chai /for assertions/

10.	Install Mocha for test reporting

11. We can run the code with npx mocha --no-timeouts /Tests/*.js (the path of the tests)
 11.1 We can modify the package.json to
   "scripts": {
    "test": "mocha --no-timeouts *js"
     }  
   and then proceed to execute the tests using the "npm test" in the terminal
    

12. We can add --parallel to the package.json - npx mocha --no-timeouts --parallel *.js to run tests simunteniously.


13. Generating test visualization reports with mochawesome ->
 1.npm install mochawesome
 2. update the package.json to include the following: 
 
 "scripts": {
    "test": "mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register *.js"
  },

Run using npm test

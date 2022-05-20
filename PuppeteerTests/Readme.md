This is the readme for the Nightmare.js based test suite for the Reach PLC family of websites.

If you want to use this test suite checkout the code and do a 'npm install' from the base directory of the project.

To run use 'npm run test' from the termainal. 

The test runner is cucumber-js so the normal cucumber run options for running specific tags etc should work

To disable headless running so you can cee the browser open and the pages load (maybe if debugging a broken test) use: 'headless=false npm run test'

To just run the test you are currently writing add the 'construction' tag and run 'npm run construction', remove tag once test is complete.

TODO:
- Update URL's in publications folder as per project Longboat
- Refactor to get URL's from the publication folder and to have the option to run against multiple environments. 
- Randomise publication used for each test when feature under test is common to all publications
- Reimplement test senarios from older test suites so they can be decomissioned and this suite becomes more useful
- Get test suite runing as a quality gate in the CICD pipeline
- Get tests running in parallel (--parallel <NUMBER_OF_SLAVES> flag added to the run script) - need to experiment with number of shards once we have more tests
- Move test suite into the same repo as code under test
- Select a subset of tests to use for cross browser testing with TestCafe
- tests running in Docker???
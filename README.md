# QA Engineer task

Inside this repository there are three folders:

- 01_Bugs - Contains tasks:
  - Build your own website, find and prioritize 5 bugs (desktop version).
  - Report bugs properly (choose the way of reporting by yourself).
- 02_User Flows - Contains task:
  - Identify 3 most critical user flows, write your insights and send the description.
- 03_AutomationTest - Contains task:
  - Automate one of those flows - create E2E test (use any automation tool you like).

## Automation Test

To run the automation test follow these steps:

1. Ensure that Node.js and npm are installed on your computer, all commands should be run in Terminal
2. Install TestCafe globally using command: npm install -g testcafe
3. Ensure that you are on the same location as the Test.js file
4. Run the automation test using command: testcafe chrome Test.js

Notes:

1. The automation test might fail because of CAPTCHA.
2. Every time (except the first run) before the test is run please change the domain name to a unique value on lines 37 and 44, in other case the test might fail.

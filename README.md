"# Playwright" 
"# PlayWright" 
Here is a step by step process of how to get started with Playwright and create authentication to begin testing power platform apps. 

System requirements
-Node.js: latest 20.x, 22.x or 24.x.
-Windows 11+, Windows Server 2019+ or Windows Subsystem for Linux (WSL).
-macOS 14 (Sonoma) or later.
-Debian 12 / 13, Ubuntu 22.04 / 24.04 (x86-64 or arm64).

1) Ensure you have all system requirements installed.
2) Clone this repository into your local system.
3) Execute the save-state.ts file 'npx tsk save-state.ts' in the terminal.
4) Login normally.
5) After successful login, press enter in the terminal. It should give you a message that auth.json was saved correctly. Press ctrl+c      in the terminal to stop the execution of the file.
6) To use your credentials, copy the path of your auth.json file and paste it into your test document like this....
   import { test, expect } from '@playwright/test';

   test.use({storageState: 'auth.json file url here'});
7) To verify that the auth state has been saved correctly, execute this command in the terminal with the url of your auth.json file...
   'npx playwright codegen --load-storage=your auth.json url here https://make.powerapps.com/'
   A codegen screen should open and automatically log you in and open the power apps maker portal.
8) Now you can generate and run tests automatically. If you want to use the code gen with a certain app, just change the https://make.powerapps.com/ url with the url of the application you want to test to direct you automatically to the desired page. 

# Planner

## Table of Contents: 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

Installation: 

For this task, an HMTL and CSS page were provided as the focus was using Jquery to add to the HTML page and create elements dynamically on the HTML page using Jquery. 

The focus was the Javascript pages, however the completed files needed to be transferred to a new Repo.

Step 1: Creating a Repo. 

In this step, Create a Repo which also has a readMe file attached.

Step 2: creating the folders and files for the repo:

Since the HTML file and CSS files were already completed, This step required creating a blank HTML pages CSS pages to 
copy the code onto using "touch<file name>".css & "touch<file name>.HTML". 

Step 3: Creating the code: 

starting with the base code HTML Code:

![Index HTML starter code](./assets/Images/HTML%20starter.png)
![CSS starter code](./assets/Images/CSS%20starter.png)

Step 4: Creating the prompts

Since the task was to create a planner for a full work day that saves the user imputs and stores it in the local storage. The first step was to  create log the time and date at the beginning of the planner using days.js.

Once this was done, creating an array that logs the time and the empty reminder, this was done in a sperate js file to create cleaner code and easier readability. Once this was done, I elected to create the rows and collums for the planner dynamically using javascript instead of utlising bootstrap in the HTML, this was to create a cleaner HTML file and although it created more challenges, this helped to gain a deeper graps on javascript.


![script for rows](./assets/Images/script%20for%20rows.png)

Following this, the next step was to create a function the stores in user's input into the local storage so that when the user presses the save button, the user input field is saved as is until they clear the planner. In addition to this, another step was ensuring that the current hour, furture hour and previous hours were coloir coded according to the user story.  

![check answer and timer function](./assets/Images/script%20for%20retrieving%20information%20and%20colour%20code.png)

Following this following this, a save button function as well as a clear function button was needed to save the user's input as well as clear the information when the user presses the respective buttons.


Deployed link: https://ohhmydeezy.github.io/Planner/

Usage: 

    the page can be used to create a rough planner for a work day from the morning to the end of the work day.

Credits: 

    Repo is made by myself, initial planner basic HTML file was provided by the university and the code thereafter was created by myslef with the help of teaching assistants and research completed on mdn web docs and stack overflow and youtube. 



License:

    See License in Repo
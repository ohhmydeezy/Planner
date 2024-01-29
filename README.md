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

Once the questions were complete the logic for how the page would dynnamically display the planner with the time, input field and save button displayed on each row corresponding to the time. In additon to this, a function was needed to iterate through the work day planner and display a color coding depending on whether the time of day had already passed, showing red for time that has passed, green for the current time and grey for the future.


![start and question function](./assets/Images/Start%20function.png)

Following this, the next step was to create a function the stores in user's input into the local storage so that when the user presses the save button, the user input field is saved as is until they clear the planner. 

![check answer and timer function](./assets/Images/check%20answer%20and%20start%20timer%20function%20.png)

Following this following this, a clear function button was needed to clear the user input's

![average change](./assets/images/Average.png)

Following this, two if statements were utilised to check the singles greatest increase from month to month and the single greatest loss from month to month.

![]()

Final step: logging the score to a highscore page: 

The final product: 
![final product]()

Deployed link: 

Usage: 

    the page can be used to check the net profits and losses for any given finances array manually added to the JS file.

Credits: 

    Repo is made by myself, initial fiannce array and basic HTML file was provided by the university and the code thereafter was created with the help of my colleagues in the a study group, the help of teaching assistants and research completed on mdn web docs and stack overflow.



License:

    See License in Repo
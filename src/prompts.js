//-----------------------------//
// prompts for inquirer to use //
//-----------------------------//
// shown on init; prompts manager for their details
const managerPrompt = [
    {
        type: "input",
        name: "name",
        message: "Hello manager! What is your name? ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please input your employee ID: ",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your employee ID!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "office",
        message: "Please enter your office number: ",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter your office number!");
                return false;
            }
        }
    }
];

// show prompt for choosing type of team member manager would like to add; presents option to finalize team
const addMemberPrompt = [
    {
        type: "list",
        name: "memberType",
        message: "What kind of team member would you like to add? ",
        choices: ["Engineer", "Intern", "Finalize Team"]
    }
];

// prompts for the two different types of employee (engineer or intern)
const engineerPrompt = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name? ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the employee's name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's employee ID: ",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the employee's ID!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the employee's email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter the engineer's GitHub username: ",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter the employee's GitHub username!");
                return false;
            }
        }
    }
];

const internPrompt = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name? ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the employee's name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's employee ID: ",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the employee's ID!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the employee's email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the name of the intern's University: ",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter the employee's university!");
                return false;
            }
        }
    }
];

module.exports = { managerPrompt, addMemberPrompt, engineerPrompt, internPrompt};
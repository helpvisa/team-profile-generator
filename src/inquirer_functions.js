// inquirer
const inquirer = require("inquirer");
// prompts for inquirer
const prompts = require("./prompts");
// employee classes
const {Manager, Engineer, Intern} = require("../lib/classes");

//-----------------//
// prompt wrappers //
//-----------------//
// all functions are async so await can be used in main
async function managerFunc() {
    return new Promise((resolve, reject) => {
        inquirer.prompt(prompts.managerPrompt)
            .then(data => {
                // reject if data is missing
                if (!data.name || !data.id || !data.email || !data.office) {
                    reject("Not enough information to create manager!");
                    return;
                }
                // otherwise create an employee out of this information
                const newEmployee = new Manager(data.name, data.id, data.email, data.office);
                resolve(newEmployee);
        });
    });
}

async function addMemberFunc() {
    return await inquirer.prompt(prompts.addMemberPrompt);
}

async function engineerFunc() {
    return new Promise((resolve, reject) => {
        inquirer.prompt(prompts.engineerPrompt)
            .then(data => {
                // reject if data is missing
                if (!data.name || !data.id || !data.email || !data.username) {
                    reject("Not enough information to create engineer!");
                    return;
                }
                // otherwise create an employee out of this information
                const newEmployee = new Engineer(data.name, data.id, data.email, data.username);
                resolve(newEmployee);
        });
    });
}

async function internFunc() {
    return new Promise((resolve, reject) => {
        inquirer.prompt(prompts.internPrompt)
            .then(data => {
                // reject if data is missing
                if (!data.name || !data.id || !data.email || !data.school) {
                    reject("Not enough information to create intern!");
                    return;
                }
                // otherwise create an employee out of this information
                const newEmployee = new Intern(data.name, data.id, data.email, data.school);
                resolve(newEmployee);
        });
    });
}

module.exports = {managerFunc, addMemberFunc, engineerFunc, internFunc};
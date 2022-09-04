// prompts for inquirer
const prompts = require("./src/prompts");

//-----------------//
// prompt wrappers //
//-----------------//
// all functions are async so await can be used in main
async function manager() {
    return await inquirer.prompt(prompts.managerPrompt);
}

async function addMember() {
    return await inquirer.prompt(prompts.addMemberPrompt);
}

async function engineer() {
    return await inquirer.prompt(prompts.engineerPrompt);
}

async function intern() {
    const data = await inquirer.prompt(prompts.internPrompt);
}

module.exports = {manager, addMember, engineer, intern};
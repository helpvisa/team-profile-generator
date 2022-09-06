// functions that wrap prompts
const {managerFunc, addMemberFunc, engineerFunc, internFunc} = require("./src/inquirer_functions");
// html generator
const gen = require("./src/gen");
// file writer
const fs = require("fs").promises;

//------//
// init //
//------//
// runs main function
main();

//---------------//
// main function //
//---------------//
// uses function to wrap main operation of program, so usage of async/await is possible
async function main() {
    // create array of team members
    const team = [];

    // get data about manager
    const manager = await managerFunc();
    // add to team
    team.push(manager);

    // prompt user for adding new team member
    let looping = true; // while this is true, we are adding team members
    while (looping) {
        // get user input and store in state constant
        const state = await addMemberFunc();
        if (state.memberType === "Engineer") {
            // prompt user for engineer details, then add to team
            const newMember = await engineerFunc();
            team.push(newMember);
        } else if (state.memberType === "Intern") {
            // prompt user for intern details, then add to team
            const newMember = await internFunc();
            team.push(newMember);
        } else {
            // otherwise, we stop looping; no members selected to add
            looping = false;
        }
    }

    // print thanks and write file
    console.log("Thanks for using the Team Builder app! Your file will be ready shortly...");

    // create dist directory if it doesn't already exist (just in case)
    try {
        // make a new folder; ignore if it is already there
        await fs.mkdir("./dist", {recursive: true});
    } catch(err) {
        // catch and log error to console
        console.error(err);
    }

    // now write file
    try {
        await fs.writeFile('./dist/team.html', gen(team));
    } catch(err) {
        // catch and log error to console
        console.error(err);
    }

    // inform the user the file is done generating
    console.log("Done! Your file can be opened from ./dist/team.html!");
}
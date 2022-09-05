// functions that wrap prompts
const {managerFunc, addMemberFunc, engineerFunc, internFunc} = require("./src/inquirer_functions");

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
    // get data about manager
    const manager = await managerFunc();

    // create array of team members
    const team = [];

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
            const newMember = await (internFunc());
            team.push(newMember);
        } else {
            // otherwise, we stop looping; no members selected to add
            looping = false;
        }
    }

    console.log(manager);
    console.log(team);
}
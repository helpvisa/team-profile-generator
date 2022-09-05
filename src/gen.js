//----------------//
// html generator //
//----------------//

// require classes for picking icons / building template
const {Manager, Engineer, Intern} = require("../lib/classes");

// function that builds template
function htmlBuilder(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- bootstrap -->
    <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
    crossorigin="anonymous">
    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/ff058f6a01.js"
    crossorigin="anonymous"></script>
    

    <title>Team Roster</title>
</head>
<body>
    <section class="jumbotron-fluid bg-danger p-4">
        <h1 class="text-light display-4 text-center">Team Roster</h1>
    </section>
        
    <section class="row display-flex justify-content-around w-100">
        ${buildTeamMembers(data)}
    </section>
</body>
</html>
    `
}

// builder functions (for use in template string)
function buildTeamMembers(data) {
    let str = ""; // string that holds html; can be added to
    
    // loop through every team member to build dataset
    data.forEach(employee => {
        let newStr = `
        <div class="col-sm-12 col-md-6 col-lg-3 m-4">
            <div class="card h-100" style="box-shadow: 5px 5px 7px">
                <div class="card-header bg-primary text-light">
                    <h3>${employee.getName()}<h3>
                    <h5>${buildEmployeeIcon(employee)}</h5>
                </div>
                <div class="card-body bg-light">
                    <p>ID: ${employee.getId()}</p>
                    <p> Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
                    ${buildEmployeeDepartment(employee)}
                </div>
            </div>
        </div>
        `

        // append to existing string
        str += newStr;
    });

    return str;
}

// selects icon based on employee class
function buildEmployeeIcon(employee) {
    let icon = ""; // icon html template

    if (employee instanceof Manager) {
        icon = `<i class="fa-solid fa-mug-saucer"></i> Manager`;
    } else if (employee instanceof Engineer) {
        icon = `<i class="fa-solid fa-glasses"></i> Engineer`;
    } else {
        icon = `<i class="fa-solid fa-graduation-cap"></i> Intern`;
    }

    // returns icon html
    return icon;
}

// creates a <p></p> section based on employee's position
function buildEmployeeDepartment(employee) {
    let p = ""; // html template

    if (employee instanceof Manager) {
        p = `<p>Office Number: ${employee.getOfficeNumber()}</p>`;
    } else if (employee instanceof Engineer) {
        p = `<p>GitHub: <a href="${employee.getGit()}" target="_blank">${employee.getGit()}</a></p>`;
    } else if (employee instanceof Intern) {
        p = `<p>School: ${employee.getSchool()}</p>`;
    }

    // returns result
    return p;
}

// export module
module.exports = htmlBuilder;
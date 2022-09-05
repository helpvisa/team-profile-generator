//------------------//
// employee classes //
//------------------//
// base employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

// manager class
class Manager extends Employee {
    constructor(name, id, email, office) {
        // init original Employee constructor
        super(name, id, email);
        this.office = office;
    }

    // methods
    // override role
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.office;
    }
}

// engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // init original Employee constructor
        super(name, id, email);
        this.github = github;
    }

    // methods
    // override role
    getRole() {
        return "Engineer";
    }

    // constructs and returns github url
    getGit() {
        return `https://github.com/${this.github}`;
    }
}

// intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // init original Employee constructor
        super(name, id, email);
        this.school = school;
    }

    //methods
    // override role
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = {Manager, Engineer, Intern, Employee};
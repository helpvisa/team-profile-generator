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
}

// manager class
class Manager extends Employee {
    constructor(name, id, email, office) {
        // init original Employee constructor
        super(name, id, email);
        this.office = office;
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
    // constructs and returns github url
    getGit() {
        return `https://github.com/${this.name}`;
    }
}

// intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // init original Employee constructor
        super(name, id, email);
        this.school = school;
    }
}
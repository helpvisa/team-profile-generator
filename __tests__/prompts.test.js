// grab from prompts.js
const {managerFunc, engineerFunc, internFunc} = require("../src/inquirer_functions");
// grab from classes.js
const {Manager, Engineer, Intern} = require("../src/classes");
// for mocking
const inquirer = require("inquirer");

// write tests
describe("test data return on manager promise", () => {
    it("verifies any data is returned in promise resolution", async () => {
        // ensure all assertions are called (asynchronouse failsafe)
        expect.assertions(1);

        // mock inquirer
        inquirer.prompt = jest.fn().mockResolvedValue({
            name: "Manager",
            id: "123",
            email: "man@man.net",
            office: "666"
        });

        await expect(managerFunc()).resolves.toEqual(expect.any(Manager));
    });

    it("verifies the correct data is returned in promise resolution", async () => {
        // ensure all assertions are called (asynchronouse failsafe)
        expect.assertions(4);

        // mock inquirer
        inquirer.prompt = jest.fn().mockResolvedValue({
            name: "Manager",
            id: "123",
            email: "man@man.net",
            office: "666"
        });

        const man = await managerFunc();

        expect(man.name).toBe("Manager");
        expect(man.id).toBe("123");
        expect(man.email).toBe("man@man.net");
        expect(man.office).toBe("666");
    });
});

describe("test data return on engineer promise", () => {
    it("verifies any data is returned in promise resolution", async () => {
        // ensure all assertions are called (asynchronouse failsafe)
        expect.assertions(1);

        // mock inquirer
        inquirer.prompt = jest.fn().mockResolvedValue({
            name: "Engineer",
            id: "123",
            email: "eng@eng.net",
            username: "helpvisa"
        });

        await expect(engineerFunc()).resolves.toEqual(expect.any(Engineer));
    });

    it("verifies the correct data is returned in promise resolution", async () => {
        // ensure all assertions are called (asynchronouse failsafe)
        expect.assertions(4);

        // mock inquirer
        inquirer.prompt = jest.fn().mockResolvedValue({
            name: "Engineer",
            id: "123",
            email: "eng@eng.net",
            username: "helpvisa"
        });

        const eng = await engineerFunc();

        expect(eng.name).toBe("Engineer");
        expect(eng.id).toBe("123");
        expect(eng.email).toBe("eng@eng.net");
        expect(eng.github).toBe("helpvisa");
    });
});

describe("test data return on intern promise", () => {
    it("verifies any data is returned in promise resolution", async () => {
        // ensure all assertions are called (asynchronouse failsafe)
        expect.assertions(1);

        // mock inquirer
        inquirer.prompt = jest.fn().mockResolvedValue({
            name: "Student",
            id: "123",
            email: "student@school.net",
            school: "University Place"
        });

        await expect(internFunc()).resolves.toEqual(expect.any(Intern));
    });

    it("verifies the correct data is returned in promise resolution", async () => {
        // ensure all assertions are called (asynchronouse failsafe)
        expect.assertions(4);

        // mock inquirer
        inquirer.prompt = jest.fn().mockResolvedValue({
            name: "Student",
            id: "123",
            email: "student@school.net",
            school: "University Place"
        });

        const intern = await internFunc();

        expect(intern.name).toBe("Student");
        expect(intern.id).toBe("123");
        expect(intern.email).toBe("student@school.net");
        expect(intern.school).toBe("University Place");
    });
});
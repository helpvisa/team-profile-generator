// grab from classes.js
const {Intern} = require("../src/classes");

// write tests
describe("intern class functionality", () => {
    it("creates an Intern object", () => {
        // create Intern
        const intern = new Intern("Derek", "678", "intern@new.com", "University of Toronto");

        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(String));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    });

    it("creates an Intern named Steve", () => {
        // create
        const intern = new Intern("Steve", "678", "intern@new.com", "University of Toronto");

        expect(intern.name).toBe("Steve");
    });

    it("creates an Intern with employee id of '678'", () => {
        // create
        const intern = new Intern("Derek", "678", "intern@new.com", "University of Toronto");

        expect(intern.id).toBe("678");
    });

    it("creates an Intern with email of 'intern@new.com'", () => {
        // create
        const intern = new Intern("Derek", "678", "intern@new.com", "University of Toronto");

        expect(intern.email).toBe("intern@new.com");
    });

    it("creates an Intern with github username of 'University of Toronto'", () => {
        // create
        const intern = new Intern("Derek", "678", "intern@new.com", "University of Toronto");

        expect(intern.school).toBe("University of Toronto");
    });
});
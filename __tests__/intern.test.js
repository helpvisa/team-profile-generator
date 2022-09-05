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

    it("returns correct intern name", () => {
        // create
        const intern = new Intern("Steve", "678", "intern@new.com", "University of Toronto");

        expect(intern.getName()).toBe("Steve");
    });

    it("returns correct intern employee id", () => {
        // create
        const intern = new Intern("Derek", "678", "intern@new.com", "University of Toronto");

        expect(intern.getId()).toBe("678");
    });

    it("returns correct intern email", () => {
        // create
        const intern = new Intern("Derek", "678", "intern@new.com", "University of Toronto");

        expect(intern.getEmail()).toBe("intern@new.com");
    });

    it("returns correct intern school", () => {
        // create
        const intern = new Intern("Derek", "678", "intern@new.com", "University of Toronto");

        expect(intern.getSchool()).toBe("University of Toronto");
    });
});
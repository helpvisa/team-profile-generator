// grab from classes.js
const {Manager} = require("../lib/classes");

// write tests
describe("manager class functionality", () => {
    it("creates a manager object", () => {
        // create manager
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.name).toEqual(expect.any(String));
        expect(man.id).toEqual(expect.any(String));
        expect(man.email).toEqual(expect.any(String));
        expect(man.office).toEqual(expect.any(String));
    });

    it("returns correct manager name", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.getName()).toBe("Derek");
    });

    it("returns correct manager employee id", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.getId()).toBe("123");
    });

    it("returns correct manager email", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.getEmail()).toBe("dman@man.com");
    });

    it("returns correct manager office number", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.getOfficeNumber()).toBe("456");
    });
});
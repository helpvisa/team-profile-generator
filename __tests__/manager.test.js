// grab from classes.js
const {Manager} = require("../src/classes");

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

    it("creates a manager named Derek", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.name).toBe("Derek");
    });

    it("creates a manager with employee id of '123'", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.id).toBe("123");
    });

    it("creates a manager with email of 'dman@man.com'", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.email).toBe("dman@man.com");
    });

    it("creates a manager with office number of '456'", () => {
        // create
        const man = new Manager("Derek", "123", "dman@man.com", "456");

        expect(man.office).toBe("456");
    });
});
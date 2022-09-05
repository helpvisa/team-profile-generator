// grab from classes.js
const {Employee} = require("../lib/classes");

// write tests
describe("employee class functionality", () => {
    it("creates an employee object", () => {
        // create empineer
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.name).toEqual(expect.any(String));
        expect(emp.id).toEqual(expect.any(String));
        expect(emp.email).toEqual(expect.any(String));
    });

    it("returns correct employee name", () => {
        // create
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.getName()).toBe("John");
    });

    it("returns correct employee id", () => {
        // create
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.getId()).toBe("555");
    });

    it("returns correct employee email", () => {
        // create
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.getEmail()).toBe("john@john.net");
    });
});
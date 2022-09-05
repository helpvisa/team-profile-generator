// grab from classes.js
const {Employee} = require("../src/classes");

// write tests
describe("employee class functionality", () => {
    it("creates an employee object", () => {
        // create empineer
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.name).toEqual(expect.any(String));
        expect(emp.id).toEqual(expect.any(String));
        expect(emp.email).toEqual(expect.any(String));
    });

    it("creates an employee named John", () => {
        // create
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.name).toBe("John");
    });

    it("creates an employee with id of '555'", () => {
        // create
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.id).toBe("555");
    });

    it("creates an employee with email of 'john@john.com'", () => {
        // create
        const emp = new Employee("John", "555", "john@john.net");

        expect(emp.email).toBe("john@john.net");
    });
});
// grab from classes.js
const {Engineer} = require("../src/classes");

// write tests
describe("engineer class functionality", () => {
    it("creates an engineer object", () => {
        // create Engineer
        const eng = new Engineer("Derek", "789", "eeng@eng.com", "helpvisa");

        expect(eng.name).toEqual(expect.any(String));
        expect(eng.id).toEqual(expect.any(String));
        expect(eng.email).toEqual(expect.any(String));
        expect(eng.github).toEqual(expect.any(String));
    });

    it("creates an engineer named Steve", () => {
        // create
        const eng = new Engineer("Steve", "789", "eeng@eng.com", "helpvisa");

        expect(eng.name).toBe("Steve");
    });

    it("creates an engineer with employee id of '789'", () => {
        // create
        const eng = new Engineer("Derek", "789", "eeng@eng.com", "helpvisa");

        expect(eng.id).toBe("789");
    });

    it("creates an engineer with email of 'eeng@eng.com'", () => {
        // create
        const eng = new Engineer("Derek", "789", "eeng@eng.com", "helpvisa");

        expect(eng.email).toBe("eeng@eng.com");
    });

    it("creates an engineer with github username of 'helpvisa'", () => {
        // create
        const eng = new Engineer("Derek", "789", "eeng@eng.com", "helpvisa");

        expect(eng.github).toBe("helpvisa");
    });
});
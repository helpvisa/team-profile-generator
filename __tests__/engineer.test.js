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

    it("returns correct engineer name", () => {
        // create
        const eng = new Engineer("Steve", "789", "eeng@eng.com", "helpvisa");

        expect(eng.getName()).toBe("Steve");
    });

    it("returns correct engineer id", () => {
        // create
        const eng = new Engineer("Derek", "789", "eeng@eng.com", "helpvisa");

        expect(eng.getId()).toBe("789");
    });

    it("returns correct engineer email", () => {
        // create
        const eng = new Engineer("Derek", "789", "eeng@eng.com", "helpvisa");

        expect(eng.getEmail()).toBe("eeng@eng.com");
    });

    it("returns correct engineer github username", () => {
        // create
        const eng = new Engineer("Derek", "789", "eeng@eng.com", "helpvisa");

        expect(eng.getGit()).toBe("https://github.com/helpvisa");
    });
});
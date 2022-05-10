const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readerJsonFile("./explorers.json");

describe("Tests for ExplorerService", () => {
    test("Filter explorers By Mission", () => {
        const explorersbymission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersbymission[0]).toMatchObject({
            name: expect.any(String),
            githubUsername: expect.any(String),
            score: expect.any(Number),
            mission: expect.stringMatching(/node/),
            stacks: expect.any(Array)
        });
    });

    test("Amount of explorers by mission", () => {
        const amountExplorersinNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountExplorersinNode).toBe(10);
    });

    test("Explorers usernames by mission", () => {
        const explorersusernamesbymission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        const expected = ["ajolonauta1","ajolonauta2","ajolonauta3","ajolonauta4","ajolonauta5","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"];
        expect(explorersusernamesbymission).toEqual(expect.arrayContaining(expected));
    });
});

const ExplorerController = require("./../../../lib/controllers/ExplorerController");

describe("Tests for ExplorerController", () => {
    test("Get explorers by mission", () => {
        const explorersbymission = ExplorerController.getExplorersByMission("node");
        expect(explorersbymission).toMatchObject([
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            },
            {
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.stringMatching(/node/),
                stacks: expect.any(Array)
            }
        ]);
    });

    test("Get explorers user names by mission", () => {
        const explorersusernames = ExplorerController.getExplorersUsernamesByMission("node");
        const expected = ["ajolonauta1","ajolonauta2","ajolonauta3","ajolonauta4","ajolonauta5","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"];
        expect(explorersusernames).toEqual(expect.arrayContaining(expected));
    });

    test("Get explorers amonut by mission", () => {
        const amountExplorersbyMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountExplorersbyMission).toBe(10);
    });
});
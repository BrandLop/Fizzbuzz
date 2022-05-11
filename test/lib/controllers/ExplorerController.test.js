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
});
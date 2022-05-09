const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readerJsonFile("./explorers.json");

describe("Tests for ExplorerService", () => {
  test("Filter explorers By Mission", () => {
    const explorersbymission = ExplorerService.filterByMission(explorers, 'node')
    expect(explorersbymission[0]).toMatchObject({
      name: expect.any(String),
      githubUsername: expect.any(String),
      score: expect.any(Number),
      mission: expect.stringMatching(/node/),
      stacks: expect.any(Array)
    })
  });

  test("Amount of explorers by mission", () => {
    const amountExplorersinNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')
    expect(amountExplorersinNode).toBe(10)
  });
});

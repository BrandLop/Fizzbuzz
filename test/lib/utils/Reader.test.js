const Reader = require("./../../../lib/utils/Reader");

describe("Tests for Reader", () => {
  test("Reading JSON file", () => {
    const explorers = Reader.readerJsonFile("./explorers.json");
    expect(explorers[0]).toMatchObject({
      name: expect.any(String),
      githubUsername: expect.any(String),
      score: expect.any(Number),
      mission: expect.any(String),
      stacks: expect.any(Array)
    });
  });
});

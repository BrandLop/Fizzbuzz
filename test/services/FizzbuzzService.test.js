const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests for FizzbuzzService class", () => {
  test("Apply FIZZBUZZ validation", () => {
    const explorer15 = {name: "Explorer15", score: 15}
    FizzbuzzService.applyValidationInExplorer(explorer15)
    expect(explorer15).toMatchObject({name: "Explorer15", score: 15, trick: "FIZZBUZZ"})
  })
})
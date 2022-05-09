const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests for FizzbuzzService class", () => {
  test("Apply FIZZBUZZ validation", () => {
    const explorer15 = {name: "Explorer15", score: 15}
    FizzbuzzService.applyValidationInExplorer(explorer15)
    expect(explorer15).toMatchObject({name: "Explorer15", score: 15, trick: "FIZZBUZZ"})
  })

  test("Apply FIZZ validation", () => {
    const explorer3 = {name: "Explorer3", score: 3, trick: "FIZZ"}
    FizzbuzzService.applyValidationInExplorer(explorer3)
    expect(explorer3).toMatchObject({name: "Explorer3", score: 3, trick: "FIZZ"})
  })
  
})
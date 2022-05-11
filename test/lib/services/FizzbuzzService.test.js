const FizzbuzzService = require("../../../lib/services/FizzbuzzService");

describe("Tests for FizzbuzzService class", () => {
    test("Apply FIZZBUZZ validation", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorer15).toMatchObject({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });

    test("Apply FIZZ validation", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorer3).toMatchObject({name: "Explorer3", score: 3, trick: "FIZZ"});
    });

    test("Apply BUZZ validation", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorer5).toMatchObject({name: "Explorer5", score: 5, trick: "BUZZ"});
    });

    test("Apply number validation", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1).toMatchObject({name: "Explorer1", score: expect.any(Number), trick: expect.any(Number)});
    });
});
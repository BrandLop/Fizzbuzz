class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    if (explorer.score % 15 === 0) {
      explorer.trick = "FIZZBUZZ"
      return explorer
    }
  }
}

module.exports = FizzbuzzService
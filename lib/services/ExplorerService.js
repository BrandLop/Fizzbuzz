const Reader = require("./../utils/Reader");
const explorers = Reader.readerJsonFile("./explorers.json");

class ExplorerService {
  static filterByMission(explorers, mission) {
    const explorersmission = explorers.filter((explorer) => explorer.mission === mission)
    return explorersmission
  }
}

module.exports = ExplorerService
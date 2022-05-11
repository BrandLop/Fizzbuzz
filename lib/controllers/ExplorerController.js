const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readerJsonFile("./explorers.json");
        const filterbymission = ExplorerService.filterByMission(explorers, mission);
        return filterbymission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readerJsonFile("./explorers.json");
        const filterusernamesbymission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return filterusernamesbymission;
    }
}

module.exports = ExplorerController;

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

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readerJsonFile("./explorers.json");
        const amountExplorersbyMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountExplorersbyMission;
    }
}

module.exports = ExplorerController;

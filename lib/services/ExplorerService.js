class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersmission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersmission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const amountExplorersbymission = Object.keys(explorers.filter((explorer) => explorer.mission === mission)).length;
        return amountExplorersbymission;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersmission = explorers.filter((explorer) => explorer.mission === mission);
        const explorersusernamesbymission = explorersmission.map((explorer) => explorer.githubUsername);
        return explorersusernamesbymission;
    }
}

module.exports = ExplorerService;
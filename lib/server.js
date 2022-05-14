const express = require("express");
const app = express();
const ExplorerController = require("./controllers/ExplorerController");
app.use(express.json());
const port = 4000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersbyMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersbyMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountbyMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: mission, quantity: explorersAmountbyMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersusernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: mission, explorers: explorersusernames});
});

const server = app.listen(port, () => {
    console.log(`Fizzbuzz server listening on port ${port}`);
});

module.exports = {app, server};
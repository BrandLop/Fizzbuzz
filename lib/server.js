const express = require("express");
const app = express();
const ExplorerController = require("./controllers/ExplorerController");
app.use(express.json());
const port = 3001;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersbyMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersbyMission);
});

const server = app.listen(port, () => {
    console.log(`Fizzbuzz server listening on port ${port}`);
});

module.exports = {app, server};
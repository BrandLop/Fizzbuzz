const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`Fizzbuzz server listening on port ${port}`);
});

module.exports = app;
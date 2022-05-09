const fs = require("fs");

class Reader {
  static readerJsonFile(path) {
    const rawdata = fs.readFileSync(path);
    const explorers = JSON.parse(rawdata);

    return explorers;
  }
}

module.exports = Reader;

const { readFile, writeFile } = require('fs').promises;

class Database {
  data = {};

  constructor(file) {
    this.file = file;
  }

  async read() {
    return JSON.parse(await readFile(this.file, 'utf-8'));
  }

  async write() {
    await writeFile(this.file, JSON.stringify(this.data));
  }
}

module.exports = Database;

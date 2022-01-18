const Database = require('./db.js');

const db = new Database('db.json');

(async () => {
  db.data.test1 = 'asdfadf';
  db.data.test2 = 'adfdfsasdf';

  await db.write();
})();

// Método para crear archivos con node

const fs = require('fs');

const dict = [];

const dictstring = JSON.stringify(dict);

fs.writeFile('jobs.json', dictstring, function (err, result) {
  if (err) console.log('error', err);
});

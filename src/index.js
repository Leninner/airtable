const fs = require('fs');

const dict = [
  {
    vacante: 'Comuniter manager-mension en ventas',
    empresa: 'BIROBID',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/2753767770/?eBP=JOB_SEARCH_ORGANIC&refId=DM1GBveL2KKJQaHYbK%2B3Pg%3D%3D&trackingId=%2BR7842y%2FZl6Hp%2BYEgL%2BWMg%3D%3D&trk=flagship3_search_srp_jobs',
    nivel: 'Especialista',
    area: 'Ventas',
    industria: 'Industrial',
  },
];

const dictstring = JSON.stringify(dict);

fs.writeFile('thing.json', dictstring, function (err, result) {
  if (err) console.log('error', err);
});

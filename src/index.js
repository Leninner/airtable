var fs = require('fs');

var dict = [
  {
    vacante: 'Android Developer',
    empresa: 'Technisys',
    ciudad: 'Remoto',
    link: 'https://www.linkedin.com/jobs/view/2750911241/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=53GIU%2BlGcX3B2BdEMqcI6w%3D%3D&trackingId=cQyW5n5QHPcFY%2FVkfLBGcg%3D%3D&trk=flagship3_search_srp_jobs',
    nivel: 'Especialista',
    area: 'Tecnología',
  },
  {
    vacante: 'ASESOR DE CRÉDITO AMBATO',
    empresa: 'Insotec Ecuador',
    ciudad: 'Ambato',
    link: 'https://www.linkedin.com/jobs/view/2752991763/?eBP=JOB_SEARCH_ORGANIC&refId=53GIU%2BlGcX3B2BdEMqcI6w%3D%3D&trackingId=AK4HEOFB5%2ByGe9VrPdUm5w%3D%3D&trk=flagship3_search_srp_jobs',
    nivel: 'Especialista',
    area: 'Finanzas',
  },
  {
    vacante: 'ASESOR DE CRÉDITO TUNGURAHUA',
    empresa: 'Insotec Ecuador',
    ciudad: 'Pelileo',
    link: 'https://www.linkedin.com/jobs/view/2752991765/?eBP=JOB_SEARCH_ORGANIC&refId=53GIU%2BlGcX3B2BdEMqcI6w%3D%3D&trackingId=K6Py0A%2BGayxI8jxzE0Ro9Q%3D%3D&trk=flagship3_search_srp_jobs',
    nivel: 'Especialista',
    area: 'Finanzas',
  },
  {
    vacante: 'Ejecutivo de negocio Banca Personas y Pyme',
    empresa: 'Banco del Austro',
    ciudad: 'Quito',
    link: 'https://www.linkedin.com/jobs/view/2752996049/?eBP=JOB_SEARCH_ORGANIC&refId=53GIU%2BlGcX3B2BdEMqcI6w%3D%3D&trackingId=BLCIvB25jFakfDJ%2F1t5LRQ%3D%3D&trk=flagship3_search_srp_jobs',
    nivel: 'Ejecutivo',
    area: 'Finanzas',
  },
  {
    vacante: 'ASESOR DE CREDITO PILLARO',
    empresa: 'Insotec Ecuador',
    ciudad: 'Pillaro',
    link: 'https://www.linkedin.com/jobs/view/2752994604/?eBP=JOB_SEARCH_ORGANIC&refId=53GIU%2BlGcX3B2BdEMqcI6w%3D%3D&trackingId=DIngcOp6ua2jZHM9QsW6tg%3D%3D&trk=flagship3_search_srp_jobs',
    nivel: 'Especialista',
    area: 'Finanzas',
  },
  {
    vacante: 'Asistente de Tesorería',
    empresa: 'Soyoda S.A.',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/2753451018/?eBP=JOB_SEARCH_ORGANIC&refId=53GIU%2BlGcX3B2BdEMqcI6w%3D%3D&trackingId=fMrv6TeAYoIhVUKAoRh%2FtQ%3D%3D&trk=flagship3_search_srp_jobs',
    nivel: 'Especialista',
    area: 'Finanzas',
  },
];

var dictstring = JSON.stringify(dict);

fs.writeFile('thing.json', dictstring, function (err, result) {
  if (err) console.log('error', err);
});

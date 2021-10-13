var fs = require('fs');

var dict = [
  {
    vacante: 'Bilingual Software Developer',
    empresa: 'CellForce',
    ciudad: 'Remoto',
    link: 'https://www.linkedin.com/jobs/view/2753445253/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=3Gbjb8MWppupWuEPXDjWJA%3D%3D&trackingId=wyu9cNSnrFTik6sRZJ2qXg%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Javascript Developer',
    empresa: 'Idukay',
    ciudad: 'Quito',
    link: 'https://www.linkedin.com/jobs/view/2741601424/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=SKILL_ASSESSMENTS&refId=3Gbjb8MWppupWuEPXDjWJA%3D%3D&trackingId=hknnmFmKa6pbz0DgVd5SRA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Fronted developer',
    empresa: 'Confidential',
    ciudad: 'Guayas',
    link: 'https://www.linkedin.com/jobs/view/2735009977/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=3Gbjb8MWppupWuEPXDjWJA%3D%3D&trackingId=blzV39XS2OG0F7KgdjzjEg%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Front-end Developer',
    empresa: 'Toptal',
    ciudad: 'Quito',
    link: 'https://www.linkedin.com/jobs/view/2748252215/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=SKILL_ASSESSMENTS&refId=3Gbjb8MWppupWuEPXDjWJA%3D%3D&trackingId=LWVUH850h7MkN2mrLO4RmA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Programador React Native',
    empresa: 'SUPPLY CHAIN SOLUTION PROVIDER',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/188452588/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=TOP_APPLICANT&refId=3Gbjb8MWppupWuEPXDjWJA%3D%3D&trackingId=tOCexhf3Bto0N5Qyn8JTGw%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'React Native Developer - Remote - LATAM',
    empresa: 'FullStack Labs',
    ciudad: 'Quito',
    link: 'https://www.linkedin.com/jobs/view/2752568505/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=3Gbjb8MWppupWuEPXDjWJA%3D%3D&trackingId=LIfNXIHwGZr9uZr53eqYmQ%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Front-End Engineer (Angular 9+)',
    empresa: 'EveryMundo',
    ciudad: 'Remoto',
    link: 'https://www.linkedin.com/jobs/view/2688413289/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=IN_NETWORK&refId=3Gbjb8MWppupWuEPXDjWJA%3D%3D&trackingId=H13llBQ8wZvNivhTZ29mFA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'VENDEDOR DE MOSTRADOR PARA VILLAFLORA/SANGOLQUÍ',
    empresa: 'CADENA NATURISTA EL ARBOLITO',
    ciudad: 'Sangolquí',
    link: 'https://www.linkedin.com/jobs/view/2750927239/?eBP=JOB_SEARCH_ORGANIC&refId=3V5bSy0Duc1GAhHC7jmcqw%3D%3D&trackingId=%2FRGo4mO7sOYP28CrFc7zWA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Especialista en ventas',
    empresa: 'Profesional Independiente',
    ciudad: 'Guayaquil Metropolitan Area',
    link: 'https://www.linkedin.com/jobs/view/2747365002/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=3V5bSy0Duc1GAhHC7jmcqw%3D%3D&trackingId=3POkIs8PW4D2ejSSHqzf3Q%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Asesor Comercial Quevedo',
    empresa: 'Sumelab Cía. Ltda.',
    ciudad: 'Quevedo',
    link: 'https://www.linkedin.com/jobs/view/2753411221/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=3V5bSy0Duc1GAhHC7jmcqw%3D%3D&trackingId=NqFEOXO7r9jm%2BhwlK7Cl3w%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Administrador de propiedades inmobiliarias',
    empresa: 'Condominio Francisco Sanchez',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/2317019442/?eBP=JOB_SEARCH_ORGANIC&refId=3V5bSy0Duc1GAhHC7jmcqw%3D%3D&trackingId=aN5wDfyeG8pVN5r7X5WlzQ%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Vendedor de Software Contable',
    empresa: 'SAGA LATAM',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/2731678806/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=TOP_APPLICANT&refId=3V5bSy0Duc1GAhHC7jmcqw%3D%3D&trackingId=l1VGCLZEu7qwuOeHWFp60g%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'VENDEDOR DE CAMPO',
    empresa: 'Grupo Plus',
    ciudad: 'Quito',
    link: 'https://www.linkedin.com/jobs/view/2746542966/?eBP=JOB_SEARCH_ORGANIC&refId=3V5bSy0Duc1GAhHC7jmcqw%3D%3D&trackingId=DZKQ8csEoI1DJMLLMuQxcg%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Ejecutivo de ventas',
    empresa: 'TRANSASIA PACIFIC S.A.',
    ciudad: 'Rumiñahui Canton',
    link: 'https://www.linkedin.com/jobs/view/2747366939/?eBP=JOB_SEARCH_ORGANIC&refId=3V5bSy0Duc1GAhHC7jmcqw%3D%3D&trackingId=88aulOVIWqD%2BorkhLoM8DA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Coordinadora de Marketing Digital',
    empresa: 'Single Jersey Ecuatoriano C.A.',
    ciudad: 'Quito Canton',
    link: 'https://www.linkedin.com/jobs/view/2747703594/?eBP=JOB_SEARCH_ORGANIC&refId=q9cY%2FH0Ycr9wTkfPyETlRw%3D%3D&trackingId=hopJ2JrNTlZ%2F%2FIdZ2Ut8qg%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Digital Marketing Executive',
    empresa: 'Sharq Amazing United (SUZA Events)',
    ciudad: 'Guayas',
    link: 'https://www.linkedin.com/jobs/view/2753417146/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=q9cY%2FH0Ycr9wTkfPyETlRw%3D%3D&trackingId=IlpD9fIQ9SDIo6%2BQB%2FMqhA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Account Executive Team Lead | Quito, Ecuador',
    empresa: 'PedidosYa',
    ciudad: 'Quito',
    link: 'https://www.linkedin.com/jobs/view/2750902210/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=q9cY%2FH0Ycr9wTkfPyETlRw%3D%3D&trackingId=cFoR%2F0J7tYqPdpsmroLtMQ%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Diseñador gráfica de marketing',
    empresa: 'PLASTICOS CONTINENTAL PLASCONTSA S.A',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/2705254348/?eBP=JOB_SEARCH_ORGANIC&refId=q9cY%2FH0Ycr9wTkfPyETlRw%3D%3D&trackingId=Vbc099zQ4ucn1QyC%2B26MmQ%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Account Executive Team Lead',
    empresa: 'PedidosYa',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/2747346565/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=q9cY%2FH0Ycr9wTkfPyETlRw%3D%3D&trackingId=PBkL6ipsi2tK77RWwdpbKA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Diseñador gráfico en prácticas',
    empresa: 'BKB Maquinaria Industrial',
    ciudad: 'Quito',
    link: 'https://www.linkedin.com/jobs/view/2753417500/?eBP=JOB_SEARCH_ORGANIC&refId=q9cY%2FH0Ycr9wTkfPyETlRw%3D%3D&trackingId=ubQoTa3X%2F%2BA79OaJySD6eA%3D%3D&trk=flagship3_search_srp_jobs',
  },
  {
    vacante: 'Account Executive Team Lead | Guayaquil, Ecuador',
    empresa: 'PedidosYa',
    ciudad: 'Guayaquil',
    link: 'https://www.linkedin.com/jobs/view/2750903039/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=q9cY%2FH0Ycr9wTkfPyETlRw%3D%3D&trackingId=R4LQFQ9TZmy3haFadxgPyA%3D%3D&trk=flagship3_search_srp_jobs',
  },
];

var dictstring = JSON.stringify(dict);

fs.writeFile('thing.json', dictstring, function (err, result) {
  if (err) console.log('error', err);
});

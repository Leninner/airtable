const URL = window.location.href;

// Keywords por área
const tecnologia = [
  'java',
  'developer',
  'front-end',
  'web',
  'back-end',
  'frontend',
  'desarrollador',
  'sistemas',
  'frontend',
  'tecnología',
  'backend',
  'programador',
  'qa',
  'software',
  'ios',
  'android',
  'react',
  'angular',
  'vue',
  'node',
  'python',
  'ti',
  'tecnologos',
  'computacion',
  'computación',
  'tecnólogos',
  'tecnico',
  'técnico',
  'tecnologa',
  'tecnóloga',
  'devops',
  'fullstack',
  'developers',
];
const ventas = [
  'ventas',
  'comercial',
  'vendedor',
  'call',
  'compras',
  'comerciales',
  'mercadeo',
  'venta',
  'vendedores',
  'sales',
];
const marketing = ['marketing', 'brand', 'planner', 'community', 'lead', 'ads'];
const innovacion = ['scrum', 'CTO', 'innovación', 'innovacion'];
const logistica = ['logistica', 'logística', 'bodega'];
const finanzas = ['financiero', 'credito', 'crédito', 'banca', 'tesorería', 'tesoreria', 'contable', 'contabilidad'];
const ejecutivo = [
  'gerente',
  'ejecutivo',
  'ejecutiva',
  'jefe',
  'jefa',
  'lider',
  'líder',
  'coordinador',
  'administrador',
  'director',
];
const rrhh = ['recruiter', 'reclutador', 'humanos', 'business', 'partner'];

// Industria
const industria = ['Confidencial', 'Comercial', 'Servicios', 'Industrial'];

// Funciones para asignar el área en cada plataforma de trabajo
function isArea(job) {
  if (job.outerText.split(' ').some((word) => tecnologia.includes(word.toLowerCase().trim()) == true)) {
    return 'Tecnología';
  } else if (job.outerText.split(' ').some((word) => ventas.includes(word.toLowerCase().trim()) == true)) {
    return 'Ventas';
  } else if (job.outerText.split(' ').some((word) => marketing.includes(word.toLowerCase().trim()) == true)) {
    return 'Marketing';
  } else if (job.outerText.split(' ').some((word) => innovacion.includes(word.toLowerCase().trim()) == true)) {
    return 'Innovación';
  } else if (job.outerText.split(' ').some((word) => logistica.includes(word.toLowerCase().trim()) == true)) {
    return 'Logística';
  } else if (job.outerText.split(' ').some((word) => finanzas.includes(word.toLowerCase().trim()) == true)) {
    return 'Finanzas';
  } else if (job.outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase().trim()) == true)) {
    return 'Dirección';
  } else if (job.outerText.split(' ').some((word) => rrhh.includes(word.toLowerCase().trim()) == true)) {
    return 'Recursos Humanos';
  }

  return 'Otros';
}

// Funciones para buscar empleos en los distintos portales de empleos
function linkedInFindJobs() {
  const jobs = document.querySelectorAll('.job-card-list__title');
  const empresas = document.querySelectorAll('.job-card-container__company-name');
  const typeOfWork = document.querySelectorAll('.job-card-container__metadata-wrapper');

  let cities = [];
  typeOfWork.forEach((element) => {
    cities.push(element.children[0]);
  });

  function findJobs(jobs, empresas, ciudades) {
    let jobsInfo = [];

    for (let i = 0; i < jobs.length; i++) {
      jobsInfo.push({
        'Fecha de Publicación de la Vacante': `${new Date().getYear() + 1900}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`,
        Cargo: jobs[i].outerText,
        Area: isArea(jobs[i]),
        Empresa: empresas[i].outerText,
        Industria: industria[Math.floor(Math.random() * industria.length)],
        'Link de la Oferta': jobs[i].href,
        Nivel: jobs[i].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
          ? 'Ejecutivo'
          : 'Especialista',
        Ubicación: ciudades[i].outerText.includes('Remoto')
          ? 'Remoto'
          : ciudades[i].outerText.split(' ')[0].toString().trim().replace(/[,|.]/g, ''),
      });
    }

    return jobsInfo;
  }

  copy(findJobs(jobs, empresas, cities));
}

function multitrabajosFindJobs() {
  const datos = document.querySelectorAll('.Card__CardContentWrapper-sc-i6v2cb-1');

  function isCity(value) {
    return value.children[0].children.length > 1
      ? value.children[0].children[1].textContent.split(',')[0].toString().trim().replace(/[,|.]/g)
      : value.children[0].textContent.split(',')[0].toString().trim().replace(/[,|.]/g);
  }

  function findJobs(datos) {
    let jobsMultitrabajos = [];

    datos.forEach((value) => {
      jobsMultitrabajos.push({
        'Fecha de Publicación de la Vacante': `${new Date().getYear() + 1900}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`,
        Cargo: value.children[1].textContent,
        Area: isArea(value.children[1]),
        Empresa: value.children[0].children.length > 1 ? value.children[0].children[0].textContent : 'Multitrabajos',
        Industria: industria[Math.floor(Math.random() * industria.length)],
        'Link de la Oferta': value.href,
        Nivel: value.children[1].textContent.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
          ? 'Ejecutivo'
          : 'Especialista',
        Ubicación: isCity(value).includes('Ecuador') ? 'Remoto' : isCity(value),
      });
    });
    return jobsMultitrabajos;
  }

  copy(findJobs(datos));
}

function joobleFindJobs() {
  let jobsJooble = [];
  const empleos = document.querySelectorAll('._2caa5._5d7c4');

  function existCities(existCity) {
    return existCity.length > 2
      ? existCity[1].children[1].childNodes[0].textContent.split(' ')[0].toString().trim().replace(/[,|.]/g, '')
      : existCity[0].children[0].childNodes[0].textContent.split(' ')[0].toString().trim().replace(/[,|.]/g, '');
  }

  function findJobs(empleos) {
    empleos.forEach((value) => {
      if (value.children[1].children[1].children.length > 1) {
        let existCity = value.children[1].children[1].children[1].children;
        jobsJooble.push({
          'Fecha de Publicación de la Vacante': `${new Date().getYear() + 1900}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`,
          Cargo: value.children[0].outerText,
          Area: isArea(value.children[0]),
          Empresa: existCity.length > 2 ? existCity[0].outerText : 'Jooble',
          Industria: industria[Math.floor(Math.random() * industria.length)],
          'Link de la Oferta': value.children[0].children[0].children[0].href,
          Nivel: value.children[0].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
            ? 'Ejecutivo'
            : 'Especialista',
          Ubicación: existCities(existCity),
        });
      } else {
        let existCity = value.children[1].children[1].children[0].children;
        jobsJooble.push({
          'Fecha de Publicación de la Vacante': `${new Date().getYear() + 1900}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`,
          Cargo: value.children[0].outerText,
          Area: isArea(value.children[0]),
          Empresa: existCity.length > 2 ? existCity[0].outerText : 'Jooble',
          Industria: industria[Math.floor(Math.random() * industria.length)],
          'Link de la Oferta': value.children[0].children[0].children[0].href,
          Nivel: value.children[0].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
            ? 'Ejecutivo'
            : 'Especialista',
          Ubicación:
            existCity.length > 2
              ? existCity[1].children[1].childNodes[0].textContent.split(' ')[0].toString().trim().replace(/[,|.]/g, '')
              : existCity[0].children[0].childNodes[0].textContent
                  .split(' ')[0]
                  .toString()
                  .trim()
                  .replace(/[,|.]/g, ''),
        });
      }
    });

    return jobsJooble;
  }

  copy(findJobs(empleos));
}

function computrabajosFindJobs() {
  let jobsComputrabajo = [];
  const datos = document.querySelectorAll('.iO');

  function isNivel(comparador) {
    if (comparador.length > 4) {
      if (comparador[1].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)) {
        return 'Ejecutivo';
      } else {
        return 'Especialista';
      }
    } else {
      if (comparador[0].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)) {
        return 'Ejecutivo';
      } else {
        return 'Especialista';
      }
    }
  }

  function findJobs(datos) {
    datos.forEach((value) => {
      let comparador = value.children;

      jobsComputrabajo.push({
        'Fecha de Publicación de la Vacante': `${new Date().getYear() + 1900}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`,
        Cargo: comparador.length > 4 ? comparador[1].outerText : comparador[0].outerText,
        Area: isArea(comparador.length > 4 ? comparador[1] : comparador[0]),
        Empresa: comparador.length > 4 ? comparador[2].children[0].outerText : comparador[1].children[0].outerText,
        Industria: industria[Math.floor(Math.random() * industria.length)],
        'Link de la Oferta': comparador.length > 4 ? comparador[1].children[0].href : comparador[0].children[0].href,
        Nivel: isNivel(comparador),
        Ubicación:
          comparador.length > 4
            ? comparador[2].children[1].outerText.split(',')[0].toString().trim().replace(/[,|.]/g)
            : comparador[1].children[1].outerText.split(',')[0].toString().trim().replace(/[,|.]/g),
      });
    });

    return jobsComputrabajo;
  }

  copy(findJobs(datos));
}

// Función padre para buscar empleos
function findJobs(URL) {
  switch (true) {
    case URL.includes('linkedin'):
      linkedInFindJobs();
      break;
    case URL.includes('multitrabajos'):
      multitrabajosFindJobs();
      break;
    case URL.includes('jooble'):
      joobleFindJobs();
      break;

    case URL.includes('computrabajo'):
      computrabajosFindJobs();
      break;
  }
}

findJobs(URL);

// TODO: Es necesario crear la lógica para comprobar el nivel y el área del trabajo

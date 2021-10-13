const URL = window.location.href;

// Keywords por área
const tecnologia = [
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
];
const ventas = ['ventas', 'comercial', 'vendedor', 'call', 'comerciales', 'mercadeo', 'venta'];
const marketing = ['marketing', 'brand', 'planner', 'community'];
const innovacion = ['scrum', 'CTO'];
const logistica = ['logistica', 'logística'];
const finanzas = ['financiero', 'credito', 'crédito', 'banca', 'tesorería', 'tesoreria'];
const ejecutivo = ['gerente', 'ejecutivo', 'ejecutiva', 'jefe', 'jefa', 'lider', 'líder', 'coordinador'];

// Funciones para asignar el área en cada plataforma de trabajo
function isArea(job) {
  if (job.outerText.split(' ').some((word) => tecnologia.includes(word.toLowerCase()) == true)) {
    return 'Tecnología';
  } else if (job.outerText.split(' ').some((word) => ventas.includes(word.toLowerCase()) == true)) {
    return 'Ventas';
  } else if (job.outerText.split(' ').some((word) => marketing.includes(word.toLowerCase()) == true)) {
    return 'Marketing';
  } else if (job.outerText.split(' ').some((word) => innovacion.includes(word.toLowerCase()) == true)) {
    return 'Innovación';
  } else if (job.outerText.split(' ').some((word) => logistica.includes(word.toLowerCase()) == true)) {
    return 'Logística';
  } else if (job.outerText.split(' ').some((word) => finanzas.includes(word.toLowerCase()) == true)) {
    return 'Finanzas';
  } else if (job.outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)) {
    return 'Dirección';
  }

  return 'Confidencial';
}

function isAreaJooble(job) {}

function isAreaComputrabajo(job) {}

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
        vacante: jobs[i].outerText,
        empresa: empresas[i].outerText,
        ciudad:
          ciudades[i].outerText.split(',')[0].toString() === 'Ecuador'
            ? 'Remoto'
            : ciudades[i].outerText.split(',')[0].toString(),
        link: jobs[i].href,
        nivel: jobs[i].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
          ? 'Ejecutivo'
          : 'Especialista',
        area: isArea(jobs[i]),
      });
    }

    return jobsInfo;
  }

  copy(findJobs(jobs, empresas, cities));
}

function multitrabajosFindJobs() {
  const datos = document.querySelectorAll('.Card__CardContentWrapper-sc-i6v2cb-1');
  function findJobs(datos) {
    let jobsMultitrabajos = [];

    function isCity(value) {
      return value.children[0].children.length > 1
        ? value.children[0].children[1].textContent.split(',')[0].toString()
        : value.children[0].textContent.split(',')[0].toString();
    }

    datos.forEach((value) => {
      jobsMultitrabajos.push({
        vacante: value.children[1].textContent,
        empresa: value.children[0].children.length > 1 ? value.children[0].children[0].textContent : 'Multitrabajos',
        ciudad: isCity(value).includes('Ecuador') ? 'Remoto' : isCity(value),
        link: value.href,
        nivel: value.children[1].textContent.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
          ? 'Ejecutivo'
          : 'Especialista',
        area: isArea(value.children[1]),
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
      ? existCity[1].children[1].childNodes[0].textContent.split(',')[0].toString()
      : existCity[0].children[0].childNodes[0].textContent.split(',')[0].toString();
  }

  function findJobs(empleos) {
    empleos.forEach((value) => {
      if (value.children[1].children[1].children.length > 1) {
        let existCity = value.children[1].children[1].children[1].children;
        jobsJooble.push({
          vacante: value.children[0].outerText,
          empresa: existCity.length > 2 ? existCity[0].outerText : 'Jooble',
          ciudad: existCities(existCity),
          link: value.children[0].children[0].children[0].href,
          nivel: value.children[0].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
            ? 'Ejecutivo'
            : 'Especialista',
          area: isArea(value.children[0]),
        });
      } else {
        let existCity = value.children[1].children[1].children[0].children;
        jobsJooble.push({
          vacante: value.children[0].outerText,
          empresa: existCity.length > 2 ? existCity[0].outerText : 'Jooble',
          ciudad:
            existCity.length > 2
              ? existCity[1].children[1].childNodes[0].textContent.split(',')[0].toString()
              : existCity[0].children[0].childNodes[0].textContent.split(',')[0].toString(),
          link: value.children[0].children[0].children[0].href,
          nivel: value.children[0].outerText.split(' ').some((word) => ejecutivo.includes(word.toLowerCase()) == true)
            ? 'Ejecutivo'
            : 'Especialista',
          area: isArea(value.children[0]),
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
        vacante: comparador.length > 4 ? comparador[1].outerText : comparador[0].outerText,
        empresa: comparador.length > 4 ? comparador[2].children[0].outerText : comparador[1].children[0].outerText,
        ciudad:
          comparador.length > 4
            ? comparador[2].children[1].outerText.split(',')[0].toString()
            : comparador[1].children[1].outerText.split(',')[0].toString(),
        link: comparador.length > 4 ? comparador[1].children[0].href : comparador[0].children[0].href,
        nivel: isNivel(comparador),
        area: isArea(comparador.length > 4 ? comparador[1] : comparador[0]),
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

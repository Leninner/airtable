const fs = require('fs');

const dict = [
  {
    vacante: 'SE SOLICITA ASISTENTE CONTABLE - ADMINISTRATIVA',
    empresa: 'URBANPROTEIN S.A.',
    ciudad: 'Guayaquil',
    link: 'https://ec.jooble.org/away/3273028160891883968?p=1&pos=1&ckey=finanzas&sid=5922984029233558873&age=15&relb=115&brelb=115&scr=68285.96639742522&bscr=68285.96639742522&elckey=4351799485122112948&iid=7206513771401717942',
    nivel: 'Especialista',
    area: 'Finanzas',
    industria: 'Industrial',
  },
  {
    vacante: 'ASISTENTE ADMINISTRATIVO Y DE RECURSOS HUMANOS',
    empresa: 'Instituto Superior Tecnológico Internacional ITI',
    ciudad: 'Quito',
    link: 'https://ec.jooble.org/away/6208914241487276588?p=1&pos=2&ckey=finanzas&sid=5922984029233558873&age=15&relb=115&brelb=115&scr=64332.06909519687&bscr=64332.06909519687&elckey=4351799485122112948&iid=2253191012583551834',
    nivel: 'Especialista',
    area: 'Confidencial',
    industria: 'Confidencial',
  },
  {
    vacante: 'Instructor de Gerente de Riesgos ISO 31000 - PECB CANADA',
    empresa: 'Quality GB',
    ciudad: 'Quito',
    link: 'https://ec.jooble.org/away/1873172125234187193?p=1&pos=3&ckey=finanzas&sid=5922984029233558873&age=15&relb=115&brelb=115&scr=62729.602190929254&bscr=62729.602190929254&elckey=4351799485122112948&iid=5805236458049303247',
    nivel: 'Ejecutivo',
    area: 'Dirección',
    industria: 'Comercial',
  },
  {
    vacante: 'ASISTENTE ADMINISTRATIVO/A POLIFUNCIONAL',
    empresa: 'consultingtax',
    ciudad: 'Quito',
    link: 'https://ec.jooble.org/away/-5443361006337755773?p=1&pos=4&ckey=finanzas&sid=5922984029233558873&age=15&relb=115&brelb=115&scr=54522.91620840987&bscr=54522.91620840987&elckey=4351799485122112948&iid=-208357643489260299',
    nivel: 'Especialista',
    area: 'Confidencial',
    industria: 'Industrial',
  },
  {
    vacante: 'Asistente Administrativo de Ventas',
    empresa: 'OMP Rehabilitación Hospitalaria',
    ciudad: 'Pichincha',
    link: 'https://ec.jooble.org/desc/4888811449996822477?ckey=finanzas&rgn=-1&pos=5&elckey=4351799485122112948&p=1&sid=5922984029233558873&age=34&relb=100&brelb=100&bscr=28472.04920083376&scr=28472.04920083376&iid=771808569883360955',
    nivel: 'Especialista',
    area: 'Ventas',
    industria: 'Industrial',
  },
  {
    vacante: 'ADMINISTRADOR DE RESTAURANTE',
    empresa: 'TABLITA GROUP',
    ciudad: 'Guayaquil',
    link: 'https://ec.jooble.org/desc/4281609714089548552?ckey=finanzas&rgn=-1&pos=6&elckey=4351799485122112948&p=1&sid=5922984029233558873&age=58&relb=100&brelb=100&bscr=24913.600368281495&scr=24913.600368281495&iid=8216213386207748734',
    nivel: 'Ejecutivo',
    area: 'Dirección',
    industria: 'Servicios',
  },
];

const dictstring = JSON.stringify(dict);

fs.writeFile('thing.json', dictstring, function (err, result) {
  if (err) console.log('error', err);
});

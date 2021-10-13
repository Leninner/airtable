# Automatización Airtable - Selecta

Proceso de automatización haciendo uso de:

- Javascript
- Python
- Excel
- Power Query
- Selenium
- openpyxl

## Proceso de uso de los archivos

1. Meterse a LinkedIn, Multitrabajos, Computrabajos, Jooble y hacer la búsqueda de empleos
2. Copiar el script de automatizacionAirtable.js dentro de la consola de los distintos portales

   - Al hacer esto, el script dejará datos copiados en el portapapeles como estos:

   ```
   [
    {
        "vacante": "SE SOLICITA ASISTENTE CONTABLE - ADMINISTRATIVA",
        "empresa": "URBANPROTEIN S.A.",
        "ciudad": "Guayaquil",
        "link": "https://ec.jooble.org/away/3273028160891883968?p=1&pos=1&ckey=finanzas&sid=5922984029233558873&age=15&relb=115&brelb=115&scr=68285.96639742522&bscr=68285.96639742522&elckey=4351799485122112948&iid=7206513771401717942",
        "nivel": "Especialista",
        "area": "Finanzas",
        "industria": "Industrial"
    },
   ]
   ```

3. Esos datos deben ser copiados dentro de la variable DICT dentro de la carpeta src/index.js

```
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
]
```

4. Después vamos a ejecutar el script src/index.js y nos va a generar un archivo thing.json y ejecutamos el live server para ingresar a esos datos.
5. Después nos vamos al archivo excel dentro de python/airtable-automation.xlsx
   - Dentro de ese archivo vamos a "Power Query" y le damos a "Desde la Web"
   - Copiamos el link de thing.json que nos generó el Live Server
6. Generamos la tabla
7. Identificamos el rango de la tabla y lo ponemos en el archivo python
8. Finalmente ejecutamos el script de python y nos vamos a ver Netflix.

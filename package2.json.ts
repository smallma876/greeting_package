/* 
detallare cada campo de package json como documentacion
*/
/* 
    CUANDO UNA APLICACION INSTALA E INTERACTUA CON NUESTRA LIBRERIA
    LO PRIMERO QUE HACE ES INTERACTUAR CON EL PACKAGE.JSON, EL PACKAGE JSON
    LE DICE DONDE BUSCAR LOS ARCHIVOS, EN ESTE EJEMPLO USA EL CAMPO
    "exports" donde usa import para esm (vite por defecto busca esto)
    y require para cjs(version anteriores que usan require)
    
    RECORDAR QUE EL PACKAGE.JSON SE AGREGA AL EMPAQUETADO, SI SE BORRA "import"
    SALDRIA ERROR EN LAS IMPORTACIONES PORQUE NO SE SABE DE DONDE SACARÁ LA INFO.
*/
export const packagejson = {
    "name": "greeting_package",
    "version": "1.0.0",
    "description": "This package is for greeting a person during the day",
    "repository": {
        "type": "git",
        "url": "https://github.com/smallma876/greeting_package"
    },
    // main se usa para indicar el punto de entrada 
    /* 
    Ejemplo: Si tienes {"main": "dist/index.js"} en tu package.json, 
    y alguien instala tu paquete y luego escribe 
    const myPackage = require('my-package');, 
    Node.js buscará y cargará dist/index.js.
    - si tiene en ves de importar por nombre de paquete o por archivo 
    y lo hace por la ruta de un  folder primero buscar un package.json 
    en ese folder y usara el main de ahí
    - si el package.json tiene exports lo preferira al main.
    - si el main apunta a un archivo cjs (como en este caso) y el type está definido como module 
      el .cjs tiene prioridad sobre el type entonces será tratado como Commonjs pasa lo mismo con
      archivos .mjs 
    */
    "main": "lib/index.cjs",
    /* 
    punto de entrada si el proyecto implementador usa esm
    */
    "browser": "lib/index.esm.js",
    /* 
        punto de entrada para los tipos
    */
    "types": "lib/types/index.d.ts",
    "exports": {
        "import": {
            "default": "./lib/index.esm.js",
            "types": "./lib/types/index.d.ts"
        },
        "require": {
            "default": "./lib/index.cjs",
            "types": "./lib/types/index.d.ts"
        }
    },
    // el type se usa para decirle a node y a otras aplicaciones como interpretar los archivos js
    // si es module permite solo imports
    // si es commonjs permite solo require
    // como esm(import/export) cjs(require, exports.module) por defecto es cjs, si usas esm debe ser module
    // en este caso el punto de entrada es lib
    "type": "module",
    "scripts": {
        "build": "rollup -c"
    },
    // files recibe un array, en el cual indicas donde se encuentran los archivos que deseas publicar
    // en el ejemplo es lib , en el cual está nuestros bundles
    // también hay archivos por defecto que se agregan como
    // package.json, licence y readme
    "files": [
        "lib"
    ],
    "author": "sergiomallma",
    "license": "MIT",
    "devDependencies": {
        "rollup": "^4.17.2",
        "rollup-plugin-delete": "^2.0.0",
        "rollup-plugin-typescript2": "^0.36.0",
        "typescript": "^5.4.5"
    }
}

/* 
detallare cada campo de package json como documentacion
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
    */
    // ahora es más moderno usar module, exports
    "main": "lib/index.cjs",
    /* 
        punto de entrada si el proyecto implementador usa esm
    */
    "browser": "lib/index.esm.js",
    /* 
        punto de entrada para los tipos
    */
    "types": "lib/types/index.d.ts",
    // el type se usa para decirle a node y a otras aplicaciones como interpretar los archivos
    // como esm(import/export) cjs(require, exports.module) por defecto es cjs, si usas esm debe ser module
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

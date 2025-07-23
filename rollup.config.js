import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";

export default {
    input: "src/index.ts",  // es donde iniciar a empaquetar
    output: [
        {
            file: "lib/index.cjs", // la salida en cjs common js
            format: "cjs"
        },
        {
            file: "lib/index.esm.js", // la salid en esm 
            format: "esm"
        }
    ],
    plugins: [
        del({ targets: ["lib/*"] }), // borra todo lo que está dentro de lib antes de volver a construir.
        typescript({ useTsconfigDeclarationDir: true }) // le dice que use el declarationDir de tsconfig.json
    ]
}
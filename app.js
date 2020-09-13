const { argv } = require('./config/yargs');
const TODO = require('./TODO/TODO');
require('colors');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = TODO.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'actualizar':
        let actualizado = TODO.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'listar':
        let listado = TODO.getListado(argv.completadoListar);
        for (let tarea of listado) {
            console.log("============Por Hacer=============".green);
            console.log(`       ${tarea.descripcion}`);
            console.log(`       Estado: ${tarea.completado}`);
            console.log("==================================".green);
        }
        break;

    case 'borrar':
        let borrado = TODO.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}
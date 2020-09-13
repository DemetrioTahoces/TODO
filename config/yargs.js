/**
 * YARGS
 */

const descripcion = {
    demand: true,
    alias: 'd',
    type: 'string',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean',
    desc: 'Marca tarea como completada o pendiente'
}

const completadoListar = {
    alias: 'c',
    default: false,
    type: 'boolean',
    desc: 'Tarea como completada o pendiente'
}

const crear = {
    descripcion
}

const listar = {
    completadoListar
}

const actualizar = {
    descripcion,
    completado
}

const eliminar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', crear)
    .command('actualizar', 'Actualiza una tarea por hacer a completada', actualizar)
    .command('listar', 'Lista las tareas por hacer', listar)
    .command('borrar', 'Elimina una tarea por hacer', eliminar)
    .help()
    .argv;

module.exports = {
    argv
}
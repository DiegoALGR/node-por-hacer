const argv = require("./config/yargs.js").argv;

const colors = require("colors");

const por_hacer = require("./por-hacer/por-hacer.js");

console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "crear":
    console.log("Crear por hacer");
    let tarea = por_hacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case "listar":
    console.log("Mostrar todas las tareas por hacer");

    let listado = por_hacer.getListado();

    for (let tarea of listado) {
      console.log("=======Por hacer======".green);
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("======================".green);
    }

    break;

  case "actualizar":
    console.log("Actualiza una tarea por hacer");
    let actualizado = por_hacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;

  case "borrar":
    console.log("Borrar una tarea");
    let borrado = por_hacer.borrar(argv.descripcion);
    console.log(borrado);
    break;

  default:
    console.log("Comando no reconocido");
}

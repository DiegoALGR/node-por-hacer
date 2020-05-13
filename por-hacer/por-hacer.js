const fs = require("fs");

let listado_por_hacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listado_por_hacer);

  fs.writeFile("db/data.json", data, (err) => {
    if (err) {
      throw new Error("No se pudo grabar: ", err);
    } else {
      console.log("La data se guardo correctamente");
    }
  });
};

const cargarDB = () => {
  try {
    listado_por_hacer = require("../db/data.json");
  } catch (error) {
    listado_por_hacer = [];
  }
};

const crear = (descripcion) => {
  cargarDB();

  let por_hacer = {
    descripcion,
    completado: false,
  };

  listado_por_hacer.push(por_hacer);

  guardarDB();

  return por_hacer;
};

const getListado = () => {
  cargarDB();
  return listado_por_hacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();

  let index = listado_por_hacer.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });

  if (index >= 0) {
    listado_por_hacer[index].completado = completado;

    guardarDB();

    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();

  let index = listado_por_hacer.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });

  if ((index) => 0) {
    listado_por_hacer.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};

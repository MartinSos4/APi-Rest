const { Router } = require("express");
const ctrMaterias = require("../controllers/materias.controller");

const routeMaterias = Router();

routeMaterias.get("/:idEst", ctrMaterias.obtenerMaterias);

routeMaterias.post("/:idEst", ctrMaterias.agregarMateria);

routeMaterias.delete("/:idEst/:idMat", ctrMaterias.eliminarMateria);

routeMaterias.put("/:idEst/:idMat", ctrMaterias.actualizar);

module.exports = routeMaterias;
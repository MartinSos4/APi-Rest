
const {Router} = require("express");
const ctrEst = require("../controllers/estudiantes.controller");
const autorizarProfesor = require("../auth/auth.profesor");
const  routerEstudiantes = Router();


routerEstudiantes.get("/",autorizarProfesor, ctrEst.obtenermarcas);

routerEstudiantes.post("/", ctrEst.agregarmarcas);

routerEstudiantes.put("/:id", ctrEst.actualizar);

routerEstudiantes.delete("/:id", ctrEst.eliminar);

module.exports = routerEstudiantes;
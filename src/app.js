const express = require('express');
const morgan = require('morgan');
const conexionDB = require("./db.conexion");
const routerEstudiantes = require("./routes/estudiantes.routes");
const routeMaterias = require('./routes/materias.routes');
const routerProfesor = require('./routes/profesores.routes');
const app = express();


//Conexion a la DB
conexionDB();


//Setting 
app.set("name", "Rest-api-Proy");
app.set("port", process.env.port || 3500);
//middleware
app.use(express.json());
app.use(morgan("common"));

//llamado de rutas
app.use(express.static("public"))
app.use("/api/estudiantes", routerEstudiantes);
app.use("/api/materias", routeMaterias);
app.use("/api/profesores", routerProfesor);




module.exports = app;
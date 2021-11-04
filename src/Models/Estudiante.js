const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema ({
    funcionario : {
        type: Number,
        required: true
    },   
    tipo: {
        type: String,
        required: true
    }, 
    hora: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    materias: [
        {
            nota: Number,
            nombre: String,
            comentario: String
        }
    ]
});

module.exports = model ("Estudiante", EstudianteSchema);
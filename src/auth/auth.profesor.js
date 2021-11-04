
const Profesor = require("../Models/Profesor");
const jwt = require("jsonwebtoken");



const autorizarProfesor = async (req,res,next) => {
    const strToken = req.headers.authorization;

if(!strToken) {
    return res.json({msj: "No se encontro el token"});
} 

try {
    const token = strToken.split(" ")[1];
    const palabra = "es-muy-secreta"
    const llave = jwt.verify(token,palabra);
    const profesor = await Profesor.findById(llave._id);

    if (!profesor) {
        return res.json({msj: "usuario no encontrado"})
    }

} catch (error) {
    res.json({error});
}

    next(); 
}

module.exports = autorizarProfesor;
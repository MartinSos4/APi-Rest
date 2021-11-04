const Profesor = require("../Models/Profesor");
const jwt = require("jsonwebtoken");

exports.registrar = async (req,res) => {

    try {
        const {correo, clave} = req.body;

        if (correo && clave) {
            const nuevoProfesor = new Profesor ({correo,clave});
            await nuevoProfesor.save();
            res.json({isOk: true, id: nuevoProfesor._id});

        } else {
            res.status(400).json({error: "faltan datos requeridos"});
        }
    } catch (error) {
        res.status(500).json({error});       
    }
};

exports.login = async (req, res) => {
    try {
        const { correo, clave} = req.body;

        if (correo && clave) {
            const profesor = await Profesor.findOne({correo});
            if (!profesor) {
                res.json({token: null, msj: "usuario o contraseña incorrectos"})
            } else {
                if (profesor.clave == clave) {
                    const {_id, correo} = profesor;
                    const opt =  {
                        expiresIn: '1h'
                    }
                    const palabra = "es-muy-secreta"
                    const token = jwt.sign({_id, correo}, palabra, opt);
                    res.json({token});
                } else {
                    res.json({token: null, msj: "usuario o contraseña incorrectos"})
                }
            }
            
        } else {
            res.status(400).json({error: "faltan datos requeridos"});
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
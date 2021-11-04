const Estudiante = require ("../Models/Estudiante");



exports.obtenermarcas = async (req, res) => {
    try {
        const marcas = await Estudiante.find({activo:true});
        res.json(marcas);
    } catch (error) {
        res.json(error);
    }
};

exports.agregarmarcas = async (req, res) => {
try {
    const {funcionario, tipo, hora, materias} = req.body;
    console.log(funcionario);

    if (funcionario && tipo && hora && materias) {
        const nuevamarca = new Estudiante ({funcionario, tipo, hora, materias});
        await nuevamarca.save();
        res.json({msj: "Marca Aceptada", id: nuevamarca._id});
    } else {
        res.json({isOk: false, msj: "Los datos son requeridos"})
    }


} catch (error) {
    res.json(error)
}
};

exports.actualizar= async (req, res) => {

    try {
    const id = req.params.id;
    const data = req.body;

        if (id && data) {
        await Estudiante.findByIdAndUpdate(id, data);
        res.json("Marca actualizada");
        } else {
        res.json({msj: "Datos insuficientes"})
        }


    } catch (error) {
        res.json(error)
    }    
};

exports.eliminar = async (req, res) => {
   try {
    const id = req.params.id;
    console.log(id);
    const eliminado = await Estudiante.findByIdAndUpdate(id, {activo: false});
    res.status(200).json({msg: "Marca borrado de forma correcta", isOk: true});
   } catch (error) {
       res.status(500).json(error);
   }
};
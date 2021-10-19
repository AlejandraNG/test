const School = require('../models/schoolSchema');

exports.school_create = async (req, res) =>{
    //tomar los datos del body
    const {body} = req;

    // validacion de informacion
    // campos requeridos, longitud de textos, valores numericos mayores o menores a X, tenga un valor

    //res.send({message: "El campo tal, no cumple con X validacion"});



    let newSchool = new School(body);

    await newSchool
        .save()
        .then((newDBObject) => console.log('Succes!', newDBObject))
        .catch((err) => console.log('oops!',err));

    res.send(newSchool);
};

exports.school_getall = async (req, res) =>{
    const data = await School.find();

    res.send(data);
};

exports.school_getbyid = async (req, res) =>{
    //req.query
    //console.log(req.params);
    const {id} = req.params;

    //validacion de que si traiga un parametro
    let regex = /^[0-9]+$/i;
    //return regex.test(input);

    if(regex.test(id)){
        console.log("Es numero");
    }else{
        console.log("no es numero");
    }
    //const data = await School.findById(id);

    res.send(id);

};

exports.school_update = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const data = await School.findOneAndUpdate({_id: id}, body);
    
    res.send(data);
};

exports.school_delete = async (req, res) =>{
    const {id} = req.params;
    
    await School.deleteOne({_id: id});

    res.send({message: "Scholl was deleted successfully"});
};

//CRUD
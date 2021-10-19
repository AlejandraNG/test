const express = require('express');
const router = express.Router();

const school_controller = require('../controllers/schoolController');

//metodo http
//ruta
//funcion js

router.post('/school', school_controller.school_create);
router.get('/school', school_controller.school_getall);
router.get('/school/:id', school_controller.school_getbyid);
router.put('/school/:id', school_controller.school_update);
router.delete('/school/:id', school_controller.school_delete);


module.exports = router;
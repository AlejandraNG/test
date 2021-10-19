const express = require("express");
const bodyParser = require("body-parser");
require("./src/models/connection"); 

/* requires de rutas */
const school_router = require('./src/routes/schoolRouter');
const student_router = require('./src/routes/studenRouter');

const app = express();
const port = 3000; // 5000 // 5001

//puerto 80 es el publico, tambien se puede usar el 8080
// Se usa para hacer transacciones SSL -> puerto ####
// SSL son certificados que se intalan en la pagina, sirve para encriptar la informacion

// 5000 para peticiones HTTP
// 5001 para HTTPS

app.use(bodyParser.json());
app.use('/api', school_router);
app.use('/api', student_router);

app.listen(port, () => {
  console.log(
    "La peticioin esta escuchando al puerto http://localhost:" + port
  );
});

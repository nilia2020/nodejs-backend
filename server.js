//importamos express
const express = require("express");
//iniciamos expres
let app = express();
// enviamos un string: Hola Jorge
app.use("/", function (req, res) {
  res.send("Hola Jorge");
});
//escuchamos al servidor en el puero 3000 del localhost
app.listen(3000);
//mensaje para saber que esto funciona
console.log("La aplicación está escuchando em http://localhost:3000");

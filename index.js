const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/logger");
const fs = require("fs");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const auth = require("./middlewares/middlewares");
require("./core/persistence/connection/connection");

//para el token, meter en otro archivo
if(typeof localStorage === "undefined" || localStorage === null){
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
}

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", require("./routes/router"));

app.get('/', auth.tokenMiddleware, function (req, res) {
    res.redirect("/perfil");
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/core/views/Login.view.html'));
});

app.get('/registro', function (req, res) {
    res.sendFile(path.join(__dirname + '/core/views/Registro.html'));
});

app.get('/perfil', auth.tokenMiddleware, function (req, res) {
    res.sendFile(path.join(__dirname + '/core/views/Perfil.html'));
});

//Start server
app.listen(app.get("port"), () => {
    console.log("El branch del luisma");
    console.log(`Server running at ${app.get("port")}`);
});


const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/logger");
const fs = require("fs");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("./core/persistence/connection/connection");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", require("./routes/router"));


app.get('/salud', function (req, res) {
    res.sendFile(path.join(__dirname + '/core/views/login/Login.view.html'));
});

app.get('/registro', function (req, res) {
    res.sendFile(path.join(__dirname + '/core/views/registro/Registro.html'));
});


//Start server
app.listen(app.get("port"), () => {
    console.log(`Server running at ${app.get("port")}`);
});


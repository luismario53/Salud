const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/logger");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

require("./core/persistence/connection/connection");

//para el token, meter en otro archivo
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
}
//
//Settings
app.set("port", process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));

app.locals.mensaje = null;


//Routes
app.use("/", require("./routes/router"));

//Start server
app.listen(app.get("port"), () => {
    console.log(`Server running at ${app.get("port")}`);
});


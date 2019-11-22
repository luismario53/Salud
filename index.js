const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/logger");
const app = express();
require("./core/persistence/connection/connection");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/", require("./routes/router"));

//Start server
app.listen(app.get("port"), () => {
    console.log(`Server running at ${app.get("port")}`);
});
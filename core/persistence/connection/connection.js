const config = require("../../../config");
const mongoose = require("mongoose");
const logger = require("../../../utils/logger");

mongoose.connect(config.mongodb.defaultconnection, {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10
});

mongoose.connection.on("connected", ()=>{
    logger.info(`Mongoose connected to: ${config.mongodb.defaultconnection}`);
});

mongoose.connection.on("error", (err)=>{
    logger.error(`Mongoose error: ${err}`);
});

mongoose.connection.on("disconnected", ()=>{
    logger.info(`Mongoose disconnected`);
});
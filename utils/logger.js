const fs = require("fs");
const Log = require("log");
const fileLog = new Log("info", fs.createWriteStream("info.log", {flags: "a"}));

exports.info = function(message){
    console.log(message);
    //fileLog.info(message);
}

exports.error = function(message){
    console.error(message);
    //ileLog.error(message);
}
const jwt = require("jsonwebtoken");
const secretPhrase = "1ts0nw3bTok3N";

exports.generateToken = function (user) {
    return jwt.sign(user, secretPhrase, { expiresIn: "15m" });
}

exports.validateToken = async function (token) {
    const decoded = await jwt.verify(token, secretPhrase); 
    return decoded;
}


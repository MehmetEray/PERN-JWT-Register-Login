const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator() {
    const payload = {
        user:user_id
    }

    jwt.sign(payload,process.env.jwtsecret,{expiresIn: "1hr"});

}

module.exports = jwtGenerator;
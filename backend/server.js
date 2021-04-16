const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use("/auth", require("./routes/jwtauth"));

//app.use("/dashboard", require("./routes/dashboard"));
app.listen(PORT, () =>
    console.log(`------- Server is running on ${PORT} -------`)
);

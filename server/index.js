// Server file, this is for setting up express, and cors.  Will also link to a Controller file.
const express = require("express");
//redeclaring express for easier use
const app = express();
const cors = require("cors");
const port = 4500;
const ctrl = require("./controller");

//adding middleware
app.use(express.json());
app.use(cors());

//declaring routes
app.post("/messages", ctrl.postMessages);
app.post("/ipsum/add", ctrl.postIpsum);
app.get("/ipsum/get", ctrl.getIpsum);

//starting the server
app.listen(port, () => console.log(`Server is up and running on ${port}...`));

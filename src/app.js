

const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");

const recruiterRoutes = require("./routes/recruiter.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/recruiters", recruiterRoutes);


module.exports = app;

 
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const nodemailer = require("nodemailer");
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./out")));

app.use("/", router);
const unknownEndpoint = (request, response) => {
  response.status(404).sendFile(path.join(__dirname, "./out", "404.html"));
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(port));

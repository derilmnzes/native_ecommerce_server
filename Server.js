require("dotenv").config();
const express = require("express");
require("./Mongodb/mongodb");

const helmet = require("helmet");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const path = require('path')
const app = express();



app.use(helmet());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later",
});

app.use(limiter);

app.use('/images', express.static(path.join(__dirname, '/public/uploads/images')));

app.use("/user", require("./src/Router/users"));
app.use('/product',require('./src/Router/products'));


app.listen(process.env.PORT, () => console.log("started"));

require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const axios = require("axios");
const session = require("express-session");
const cors = require("cors");
const port = process.env.SERVER_PORT || 3005;

//require any middleware down the road...
// app.use(anyMiddleware.js) you have
const app = express();

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1209600000 // two weeks
    }
  })
);

//Massive Use - - dbInstance call to create a table also included - -
/*
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    // dbInstance
    //   .create_table_here()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(e => console.log(e));
  })
  .catch(error => {
    console.log(error);
  });
  */

//!!!!!
//Express.static to join the files to build ---- when ready, run "npm build"
/*
app.use(express.static(`${__dirname}/../build`));
*/
//!!!!!

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});

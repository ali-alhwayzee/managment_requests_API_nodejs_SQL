
const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to managment_requests system" });
  });
  require("./routes/request.routes.js")(app);
  app.listen(5000, () => {
    console.log("Server is running on port 5000.");
  });


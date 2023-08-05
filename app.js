const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  console.log(process.env.ENV_NAME);
  res.send("Voila! you are in " + process.env.ENV_NAME);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

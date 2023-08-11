const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  console.log(process.env.ENV_NAME);

  setTimeout(() => {
    res.send("Voila! you are in " + process.env.ENV_NAME);
  }, 5000);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

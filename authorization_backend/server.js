const express = require("express");
const save_user = require("./controllers/authorization/save_user.js");
const verify_user = require("./controllers/authorization/verify_user.js");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  verify_user.token_verification(req.body.user_token);
  res.send("Hello, this is your Express server!");
});
app.post("/save_data", (req, res) => {
  console.log(req.body.user_data);
  save_user.token_generation(req.body.user_data);
  res.send("Done :================(");
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

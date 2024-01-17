require("dotenv").config();
const jwt = require("jsonwebtoken");
function token_generation(data) {
  try {
    const token = jwt.sign({ User_data: data }, process.env.Secret_key);
    console.log("Token Generated :-", token);
  } catch (err) {
    console.log(err);
  }
}
module.exports = { token_generation };

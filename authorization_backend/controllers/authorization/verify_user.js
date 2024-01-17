require("dotenv").config();
const jwt = require("jsonwebtoken");
function token_verification(token) {
  try {
    jwt.verify(token, process.env.Secret_key, function (err, txt) {
      if (err) {
        console.error("Verification Error: ", err);
      } else {
        console.log("Decoded text from token: ", txt);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
module.exports = { token_verification };

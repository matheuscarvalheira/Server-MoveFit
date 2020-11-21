const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = hashPassword;

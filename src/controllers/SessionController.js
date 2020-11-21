const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async login(request, response) {
    const { email, password } = request.body;

    try {
      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return response.status(400).json({ error: "User not found" });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return response.status(400).json({ error: "Invalid password" });
      }

      user.password = undefined;
      return response.status(200).json(user);
    } catch (error) {
      console.log(error.message);
    }
  },
};

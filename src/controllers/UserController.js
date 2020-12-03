const User = require("../models/User");
const hash = require("./hashPassword");

module.exports = {
  async create(request, response) {
    const {
      email,
      name,
      surname,
      cellphone,
      address,
      birthday,
      password,
    } = request.body;

    let user;

    try {
      const hashedPassword = await hash.hashPassword(password);

      user = await User.findOne({ email });
      if (user) {
        return response.status(400).json({ error: "User already exists" });
      }

      user = await User.create({
        email,
        name,
        surname,
        cellphone,
        address,
        birthday,
        password: hashedPassword,
      });

      user.password = undefined;

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },

  async index(request, response) {
    let users;
    try {
      users = await User.find();

      return response.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },

  async update(request, response) {
    const { _id } = request.params;
    const { email, cellphone, address, password } = request.body;

    let user;

    try {
      if (password !== "") {
        const hashedPassword = await hashPassword(password);

        user = await User.findById(_id);
        if (!user) {
          return response.status(400).json({ error: "User not found" });
        }

        user = await User.findByIdAndUpdate(
          _id,
          {
            email,
            cellphone,
            address,
            password: hashedPassword,
          },
          { new: true }
        );

        return response.status(200).json(user);
      } else {
        user = await User.findById(_id);
        if (!user) {
          return response.status(400).json({ error: "User not found" });
        }

        user = await User.findByIdAndUpdate(
          _id,
          {
            email,
            cellphone,
            address,
          },
          { new: true }
        );

        return response.status(200).json(user);
      }
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  },
};

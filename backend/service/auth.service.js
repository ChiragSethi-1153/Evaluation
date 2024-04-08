const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../model/users");
const key = process.env.JWT_KEY;

exports.signup = async (req) => {
  try {
    console.log(req.body);
    const { name, email, password, role } = req.body;

    const existingUser = await Users.findOne({ email: email });

    if (existingUser) {
      return 409;
    }
    
    const validateEmail = (email) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
    };

    const validatePassword = (pass) => {
      // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(pass);
    };

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    console.log(isEmailValid, isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      const hashedPassword = bcrypt.hashSync(password);

      const user = new Users({
        name,
        email,
        password: hashedPassword,
        role
      });

      await user.save();
      return user;
    } else if (!isEmailValid) {
      return 405;
    } else if (!isPasswordValid) {
      return 400;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await Users.findOne({ email: email });
    if (!existingUser) {
      return 404;
    }
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return 400;
    }
    const token = jwt.sign({ id: existingUser._id, role: existingUser.role }, key, {
      expiresIn: "12hr",
    });
    console.log("Generated Token\n", token);
    const data = {
      name: existingUser?.name,
      email: existingUser?.email,
      role: existingUser?.role
    };
    return { data, token };
  } catch (err) {
    return new Error(err);
  }
};

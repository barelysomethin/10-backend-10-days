import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = [];

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedpassword = await bcrypt.hash(password, 5);
  const user = {
    username: username,
    email: email,
    password: hashedpassword,
  };
  users.push(user);
  res.json("user created", user);
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const founduser = users.find((user) => user.username === username);
  if (founduser) {
    const match = await bcrypt.compare(password, founduser.password);
    if (match) {
      const token = jwt.sign(username, process.env.SECRET_KEY);
      res.json({ token, founduser });
    }
  }
};

export { signup, login };

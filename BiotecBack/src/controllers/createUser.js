const { User } = require('../data');
const bcrypt = require('bcrypt');
const response = require('../utils/response');

const createUser = async (req, res) => {
  console.log('Request received for signup:', req.body);
  const { email, password, first_name, last_name, is_admin, n_document } = req.body;

  console.log('Checking if user already exists with email:', email);
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    console.log('User already exists:', existingUser);
    return response(res, 400, "El usuario con este correo electrónico ya existe.");
  }

  console.log('Hashing password');
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log('Creating new user');
  const newUser = await User.create({
    email,
    password: hashedPassword,
    first_name,
    last_name,
    is_admin
  });

  console.log('New user created:', newUser);

  response(res, 201, { message: 'User created successfully', user: newUser });
};

module.exports = createUser;


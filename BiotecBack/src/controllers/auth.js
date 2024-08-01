const { User } = require('../data');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('../utils/response');

const auth = async (req, res) => {
  console.log('Request received for login:', req.body);
  const { email, password } = req.body;

  console.log('Checking if user exists with email:', email);
  const user = await User.findOne({ where: { email } });

  if (!user) {
    console.log('User not found');
    return response(res, 401, "Invalid email or password");
  }

  console.log('Comparing passwords');
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    console.log('Password does not match');
    return response(res, 401, "Invalid email or password");
  }

  console.log('Generating JWT');
  const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });

  console.log('Login successful');
  response(res, 200, { message: 'Login successful', token });
};

module.exports = auth;






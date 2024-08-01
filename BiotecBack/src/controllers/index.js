const { catchedAsync } = require('../utils');
module.exports = {
  createUser: catchedAsync(require('./createUser')),
  auth: catchedAsync(require('./auth')),
  putUserAdmin: catchedAsync(require('./putUserAdmin')),
  getUsersAdmin: catchedAsync(require('./getUsersAdmin')),
  
};
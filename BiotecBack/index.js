// index.js
const app = require('./src/app');
const { conn } = require('./src/data');
const { PORT } = require('./src/config/envs');

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 listening on port: ${PORT} 🚀`);
  });
});

const app = require('./app');
const config = require('./config/env');
const connectDB = require('./config/db');
const scheduler = require('./jobs/scheduler');
const { initBot } = require('./integrations/telegram');

const startServer = async () => {
  // Connect to Database
  await connectDB();

  // Initialize Telegram Bot
  initBot();

  // Start Cron Jobs
  scheduler.start();

  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
};

startServer();

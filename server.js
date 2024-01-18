require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log(err.name, '| Reason:', err.message);
  console.log('Complete Error Log:', err);
  process.exit(1);
});

const app = require('./app');
console.log(process.env.NODE_ENV);

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => console.log('DB connection successfull'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Not Ideal: errors should be handled on the place they probably happen
if (process.env.NODE_ENV === 'development') {
  process.on('unhandledRejection', (err, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', err);
    server.close(() => {
      process.exit(1);
    });
  });
} else if (process.env.NODE_ENV === 'production') {
  process.on('unhandledRejection', (err) => {
    console.log(err.name, '| Reason:', err.message);
    server.close(() => {
      process.exit(1);
    });
  });
}

process.on('SIGTERM', () => {
  console.log('SIGTERM Received. Shutting down...');
  server.close();
});

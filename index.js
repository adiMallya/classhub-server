const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const connectDb = require('./config/db');
const logger = require('./middlewares/logger.middleware');
const errorHandler = require('./middlewares/error.middleware');

//Connect to Db
connectDb();

//Routes
const students = require('./routes/student.routes');
const teachers = require('./routes/teacher.routes');
const classes = require('./routes/class.routes');

const app = express();
//Body parser
app.use(express.json());

//Middlewares
if (process.env['NODE_ENV'] === 'development') {
  app.use(logger);
}
// Sanitize data(prevent NoSQL injections)
app.use(mongoSanitize());
// Enable CORS(Cross-Origin Resource Sharing)
app.use(cors({}));

app.use(helmet());

//Mount Routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome To Classhub</h1>')
});
app.use('/api/v1/students', students);
app.use('/api/v1/teachers', teachers);
app.use('/api/v1/class', classes);
//Error Handling
app.use(errorHandler);

const PORT = process.env['PORT'] || 2000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env['NODE_ENV']} mode
    on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error : ${err.message}`);

  server.close(() => process.exit(1));
})
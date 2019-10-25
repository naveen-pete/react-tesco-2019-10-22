const morgan = require('morgan');
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const log = require('./middleware/log');
const productRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');

const app = express();

// middleware
app.use(log);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(cors());

// routes
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/', homeRouter);

const connectToDbServer = () => {
  const connectionString = config.get('db.connection-string');
  return mongoose.connect(connectionString, { useNewUrlParser: true });
}

const startAppServer = async () => {
  try {
    await connectToDbServer();

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('eCom app server started. Listening on port ' + port);
      console.log('Connected to eCom database server.');
    });
  } catch (e) {
    console.log('Error while connecting to eCom database server.');
    console.log('ERROR:', e.message);
  }
}

// start the server
startAppServer();

// connectToDbServer()
//   .then(() => {
//     console.log('Successfully connected to database server.');

//     app.listen(port, () => {
//       console.log('App server started. Listening on port ' + port);
//     });
//   })
//   .catch((err) => {
//     console.log('Error while connecting to database server.');
//     console.log('ERROR:', err);
//   });

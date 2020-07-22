import mongoose from 'mongoose';

const { MONGOBD_BASE_URI, MONGOBD_DATABASE_NAME } = process.env;

if (MONGOBD_BASE_URI || MONGOBD_DATABASE_NAME) {
  throw new Error(
    'The envs MONGOBD_BASE_URI and MONGOBD_DATABASE_NAME are mandatory!',
  );
}

const createConnection = (): void => {
  mongoose.connect('mongodb://localhost/link-integration', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connecting', () => {
    console.info('Connecting to mongoDB...');
  });

  mongoose.connection.on('error', err => {
    console.error('Error connecting to mongoDB: ', err);
  });

  mongoose.connection.on('open', () => console.info('Mongodb connected!'));
};

createConnection();

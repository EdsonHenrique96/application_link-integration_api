import express from 'express';

const api = express();

api.get('/', (req, res) => {
  return res.send('Hello LinkAPI');
});

api.listen(3000, () => {
  console.log('API is running on PORT 3000');
});

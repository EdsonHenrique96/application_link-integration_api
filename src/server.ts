import express from 'express';

import dealsRoutes from './routes/deals';

const PORT = '3333';

const api = express();

api.use(express.json());
api.use('/deals', dealsRoutes);

api.listen(PORT, () => {
  console.log(`API is running on PORT ${PORT}`);
});

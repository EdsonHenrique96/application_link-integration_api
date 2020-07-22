import { Router } from 'express';

const routes = Router();

routes.post('/', (req, res) => {
  console.info('POST /deals');
  console.log(req.body);
  return res.status(201).json(req.body);
});

export default routes;

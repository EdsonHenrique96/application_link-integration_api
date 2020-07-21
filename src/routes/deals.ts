import { Router } from 'express';

const routes = Router();

routes.post('/', (req, res) => {
  return res.status(201).json(req.body);
});

export default routes;

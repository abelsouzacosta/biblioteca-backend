import { Router } from 'express';
import { authorRouter } from '@modules/authors/routes';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Olá mundo',
  });
});

router.use('/autores', authorRouter);

export { router };

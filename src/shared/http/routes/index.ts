import { Router } from 'express';
import { authorRouter } from '@modules/authors/routes';
import { publisherRouter } from '@modules/publishers/routes';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Olá mundo',
  });
});

router.use('/autores', authorRouter);

router.use('/editoras', publisherRouter);

export { router };

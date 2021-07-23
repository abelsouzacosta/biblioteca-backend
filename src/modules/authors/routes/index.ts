import { Router } from 'express';
import { AuthorController } from '../controllers/AuthorController';

const authorRouter = Router();
const controller = new AuthorController();

authorRouter.get('/', controller.index);

authorRouter.post('/', controller.create);

export { authorRouter };

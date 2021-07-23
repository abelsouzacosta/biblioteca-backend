import { Router } from 'express';
import { PublisherController } from '../controllers/PublisherController';

const publisherRouter = Router();
const controller = new PublisherController();

publisherRouter.get('/', controller.index);

publisherRouter.post('/', controller.create);

publisherRouter.put('/:id', controller.update);

publisherRouter.delete('/:id', controller.delete);

export { publisherRouter };

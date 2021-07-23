import { Router } from 'express';
import { PublisherController } from '../controllers/PublisherController';

const publisherRouter = Router();
const controller = new PublisherController();

publisherRouter.post('/', controller.create);

export { publisherRouter };

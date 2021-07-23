import { Request, Response } from 'express';
import CreatePublisherService from '../services/CreatePublisherService';
import ListPublishersService from '../services/ListPublishersService';

class PublisherController {
  public async index(request: Request, response: Response): Promise<Response> {
    const list = new ListPublishersService();

    const publishers = await list.execute();

    return response.status(200).json(publishers);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const create = new CreatePublisherService();

    const publisher = await create.execute({ name });

    return response.status(200).json(publisher);
  }
}

export { PublisherController };

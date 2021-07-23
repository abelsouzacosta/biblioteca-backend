import { Request, Response } from 'express';
import CreatePublisherService from '../services/CreatePublisherService';

class PublisherController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const create = new CreatePublisherService();

    const publisher = await create.execute({ name });

    return response.status(200).json(publisher);
  }
}

export { PublisherController };

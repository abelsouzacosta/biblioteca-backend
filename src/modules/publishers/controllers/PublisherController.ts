import { Request, Response } from 'express';
import CreatePublisherService from '../services/CreatePublisherService';
import DeletePublisherService from '../services/DeletePublisherService';
import ListPublishersService from '../services/ListPublishersService';
import UpdatePublisherService from '../services/UpdatePublisherService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const update = new UpdatePublisherService();

    const publisher = await update.execute({ id, name });

    return response.status(200).json(publisher);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const delete_publisher = new DeletePublisherService();

    const deleted = await delete_publisher.execute({ id });

    return response.status(200).json(deleted);
  }
}

export { PublisherController };

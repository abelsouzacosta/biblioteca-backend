import { Request, Response } from 'express';
import CreateAuthorService from '../services/CreateAuthorService';
import DeleteAuthorService from '../services/DeleteAuthorService';
import ListAuthorService from '../services/ListAuthorService';
import UpdateAuthorService from '../services/UpdateAuthorService';

class AuthorController {
  public async index(request: Request, response: Response): Promise<Response> {
    const list = new ListAuthorService();

    const authors = await list.execute();

    return response.status(200).json(authors);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, date_birth } = request.body;

    const create = new CreateAuthorService();

    const author = await create.execute({ name, description, date_birth });

    return response.status(200).json(author);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const delete_author = new DeleteAuthorService();

    const deleted = await delete_author.execute({ id });

    return response.status(200).json(deleted);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, date_birth } = request.body;

    const update = new UpdateAuthorService();

    const author = await update.execute({ id, name, description, date_birth });

    return response.status(200).json(author);
  }
}

export { AuthorController };

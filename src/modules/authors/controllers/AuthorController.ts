import { Request, Response } from 'express';
import CreateAuthorService from '../services/CreateAuthorService';
import ListAuthorService from '../services/ListAuthorService';

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
}

export { AuthorController };

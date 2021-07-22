import { Request, Response } from 'express';
import CreateAuthorService from '../services/CreateAuthorService';

class AuthorController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, date_birth } = request.body;

    const create = new CreateAuthorService();

    const author = await create.execute({ name, description, date_birth });

    return response.status(200).json(author);
  }
}

export { AuthorController };

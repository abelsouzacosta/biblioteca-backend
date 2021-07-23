import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IAuthorResponse } from '../interfaces/IAuthorResponse';

export default class ListAuthorService {
  public async execute(): Promise<IAuthorResponse[] | undefined> {
    const authors = await client.author.findMany();

    if (!authors) throw new ApplicationError('No authors was found');

    return authors;
  }
}

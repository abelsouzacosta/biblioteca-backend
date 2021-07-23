import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IAuthorUpdate } from '../interfaces/IAuthorUpdate';
import { IAuthorResponse } from '../interfaces/IAuthorResponse';

export default class UpdateAuthorService {
  public async execute({
    id,
    name,
    description,
    date_birth,
  }: IAuthorUpdate): Promise<IAuthorResponse | undefined> {
    // verifica se o autor realmente exists
    const authorExists = await client.author.findFirst({
      where: {
        id,
      },
    });

    if (!authorExists) throw new ApplicationError('Author not found');

    // atualiza o autor
    const author = await client.author.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        date_birth,
      },
    });

    return author;
  }
}

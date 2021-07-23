import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IAuthorDelete } from '../interfaces/IAuthorDelete';

export default class DeleteAuthorService {
  public async execute({ id }: IAuthorDelete): Promise<boolean | undefined> {
    // verifica se o autor existe
    const author = client.author.findFirst({
      where: {
        id,
      },
    });

    if (!author) throw new ApplicationError('Author not found');

    const deleted = await client.author.delete({
      where: {
        id,
      },
    });

    return !!deleted;
  }
}

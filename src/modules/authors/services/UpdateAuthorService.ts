import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IAuthorUpdate } from '../interfaces/IAuthorUpdate';
import { IAuthorResponse } from '../interfaces/IAuthorResponse';
import { isValid } from 'date-fns';

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

    // data de aniversário
    let date = null;

    // verifica se o formato de data é valido
    if (date_birth) {
      date = new Date(date_birth);

      const validDate = isValid(date);

      if (!validDate) throw new ApplicationError('Invalid Date');
    }

    // atualiza o autor
    const author = await client.author.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        date_birth: date_birth ? new Date(date_birth) : date_birth,
      },
    });

    return author;
  }
}

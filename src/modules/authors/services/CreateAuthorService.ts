import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IAuthorCreate } from '../interfaces/IAuthorCreate';
import { IAuthorResponse } from '../interfaces/IAuthorResponse';
import { isValid } from 'date-fns';

export default class CreateAuthorService {
  public async execute({
    name,
    description,
    date_birth,
  }: IAuthorCreate): Promise<IAuthorResponse> {
    // verifica se a data de nascimento passada é valida
    const validDateBirth = isValid(new Date(date_birth));

    // cria uma nova data de nascimento
    const date = new Date(date_birth);

    if (!validDateBirth) throw new ApplicationError('Invalid date format');

    // cria o autor
    const author = await client.author.create({
      data: {
        name,
        description,
        date_birth: date,
      },
    });

    return author;
  }
}

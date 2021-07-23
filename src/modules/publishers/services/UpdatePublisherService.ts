import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IPublisherResponseOrUpdate } from '../interfaces/IPublisherResponseOrUpdate';

export default class UpdatePublisherService {
  public async execute({
    id,
    name,
  }: IPublisherResponseOrUpdate): Promise<
    IPublisherResponseOrUpdate | undefined
  > {
    // busca a editora pelo nome
    const getPublisherById = await client.publisher.findFirst({
      where: {
        id,
      },
    });

    if (!getPublisherById) throw new ApplicationError('Publisher not found');

    // busca a editora pelo nome
    const getPublisherByName = await client.publisher.findFirst({
      where: {
        name,
      },
    });

    // se os ids da editora encontrada pelo nome e encontrada pelo id
    // forem diferentes significa que há uma tentativa de duplicação
    if (getPublisherByName?.id) {
      if (getPublisherById.id !== getPublisherByName.id)
        throw new ApplicationError('Could not update, duplacete entry');
    }

    const publisher = await client.publisher.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return publisher;
  }
}

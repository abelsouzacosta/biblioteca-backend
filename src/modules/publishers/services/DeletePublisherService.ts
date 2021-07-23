import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IPublisherDelete } from '../interfaces/IPublisherDelete';

export default class DeletePublisherService {
  public async execute({ id }: IPublisherDelete): Promise<boolean | undefined> {
    // verifica se está no banco de dados
    const publisherExits = await client.publisher.findFirst({
      where: {
        id,
      },
    });

    if (!publisherExits) throw new ApplicationError('Publisher not found');

    const deleted = await client.publisher.delete({
      where: {
        id,
      },
    });

    return !!deleted;
  }
}

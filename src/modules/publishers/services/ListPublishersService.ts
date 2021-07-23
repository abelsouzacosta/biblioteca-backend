import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IPublisherResponseOrUpdate } from '../interfaces/IPublisherResponseOrUpdate';

export default class ListPublishersService {
  public async execute(): Promise<IPublisherResponseOrUpdate[] | undefined> {
    // busca todas as instâncias
    const publishers = await client.publisher.findMany();

    if (!publishers) throw new ApplicationError('No Publisher was found');

    return publishers;
  }
}

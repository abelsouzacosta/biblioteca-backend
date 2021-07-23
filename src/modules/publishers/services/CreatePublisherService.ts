import ApplicationError from '@errors/ApplicationError';
import { client } from '@databaseClient/client';
import { IPublisherCreate } from '../interfaces/IPublisherCreate';
import { IPublisherResponseOrUpdate } from '../interfaces/IPublisherResponseOrUpdate';

export default class CreatePublisherService {
  public async execute({
    name,
  }: IPublisherCreate): Promise<IPublisherResponseOrUpdate | undefined> {
    // verifica se já existe
    const publisherExists = await client.publisher.findFirst({
      where: {
        name,
      },
    });

    if (publisherExists)
      throw new ApplicationError('This Publisher already exists');

    // cria a editora no banco de dados
    const publisher = await client.publisher.create({
      data: {
        name,
      },
    });

    return publisher;
  }
}

import { ConflictException, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';

export abstract class BaseRepository<T> extends Repository<T> {
  async existsOrFail(identifier: {
    [key: string]: string | number;
  }): Promise<boolean> {
    const exists = await this.count({ ...identifier });
    if (exists) {
      Logger.log(
        `${exists.constructor.name} with ${Object.entries(
          identifier,
        )} already exist`,
      );
      throw new ConflictException('Record already exist');
    }
    return false;
  }
}

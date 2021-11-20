import { ClassType } from 'class-transformer/ClassTransformer';

export interface BaseEntityMapper<T, BaseDTO> {
  toEntity?(dto: Partial<T>): T | Promise<T>;
  toDto<D extends BaseDTO>(
    entity: T & Record<string, unknown>,
    dtoType?: ClassType<D>,
  ): D;
}
import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { User } from "../entities/user.entity";
import { ClassType } from 'class-transformer/ClassTransformer';
import { UserDto } from "../dtos/response/user.dto";
import { BaseEntityMapper } from "../../common/mapper/base-entity.mapper";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserMapper implements BaseEntityMapper<User, UserDto> {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}
    toDto<D extends UserDto>(entity: User, UserDto?: ClassType<D>): D {
        return plainToClass(UserDto, entity);
    }

    toEntity(dto: Partial<User>): Promise<User> {
        return this.userRepository.findOneOrFail({ id: dto.id});
    }
}
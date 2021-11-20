import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/request/create-user.dto";
import { UpdateUserDto } from "../dtos/request/update-user.dto";
import { UserDto } from "../dtos/response/user.dto";
import { UserMapper } from "../mapper/user.mapper";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userMapper: UserMapper,
    ) {}

    async createUser(params: CreateUserDto): Promise<UserDto> {
        const user = await this.userRepository.save(
            this.userRepository.create({
                ...params,
            })
        )

        return this.userMapper.toDto(user, UserDto);
    }

    async update(id: number, params: UpdateUserDto): Promise<UserDto> {
        const user = await this.userRepository.findOneOrFail(id)
        await this.userRepository.update(id, params);
        return this.userMapper.toEntity(user);
    }

    async findAll(): Promise<UserDto> {
        const users = await this.userRepository.findAllUsers();

        return this.userMapper.toDto(users, UserDto);
    }

    async deleteUser(id: number): Promise<void> {
        const user = await this.userRepository.findOneOrFail(id);

        await this.userRepository.delete(user.id);
    }
}
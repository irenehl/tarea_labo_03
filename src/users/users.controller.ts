import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/request/create-user.dto";
import { UpdateUserDto } from "./dtos/request/update-user.dto";
import { UserDto } from "./dtos/response/user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./services/user.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(
        @Body() params: CreateUserDto,
    ): Promise<UserDto> {
        return this.userService.createUser(params);
    }

    @Get()
    findAll(): Promise<UserDto> {
        return this.userService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() params: UpdateUserDto): Promise<UserDto> {
        return this.userService.update(id, params);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.userService.deleteUser(id);
    }
}
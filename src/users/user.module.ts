import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { UserService } from "./services/user.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [UsersController],
    providers: [UserService],
    exports: [TypeOrmModule],
})

export class UserModule {}
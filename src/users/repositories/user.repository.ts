import { BaseRepository } from "src/core/repositories/base.repository";
import { User } from "../entities/user.entity";
import { genSalt, hash } from 'bcryptjs';

export class UserRepository extends BaseRepository<User> {
    async findAllUsers(): Promise<any> {
        const query = await this.createQueryBuilder('users')
          .orderBy('user.createdAt', 'DESC');
    
        const user = await query.getMany();
    
        return user;
      }

      async bcryptPassword(password: string): Promise<string> {
        const salt: string = await genSalt();
        return hash(password, salt);
      }
    
}
import { BaseRepository } from "src/core/repositories/base.repository";
import { User } from "../entities/user.entity";

export class UserRepository extends BaseRepository<User> {
    async findAllUsers(): Promise<any> {
        const query = await this.createQueryBuilder('users')
          .orderBy('user.createdAt', 'DESC');
    
        const user = await query.getMany();
    
        return user;
      }
}
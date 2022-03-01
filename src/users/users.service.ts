import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'nguyen' }, { id: 1, name: 'huy' }];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }
  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }
  createUser(createUserDto: CreateUserDto): User {
    const user = {
      id: Date.now(),
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }
}

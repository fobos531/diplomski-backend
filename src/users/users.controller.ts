import { Body, Controller, Get, Post } from '@nestjs/common';
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';

import { User } from './schemas/user.schema';

import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private readonly tmdb: TheMovieDbService,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get('/movies')
  async getMovies(): Promise<any> {
    const args = {
      pathParameters: {
        movie_id: 384018,
      },
    };

    return await this.tmdb.getMovieEndpoint().getDetails(args);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }
}

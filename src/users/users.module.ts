import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { User, UserSchema } from './schemas/user.schema';
import { TheMovieDbModule } from '@harshppatel/nestjs-themoviedb-api';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    TheMovieDbModule.forAsyncRoot({
      useFactory: async () => {
        return {
          API_KEY: '7f56220ea12b0774046ada248341dca3', // You can also pass `language` option from node-themoviedb library
        };
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

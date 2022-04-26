import { Module } from '@nestjs/common';
import { TheMovieDbModule } from '@harshppatel/nestjs-themoviedb-api';

import { TVController } from './tv.controller';

@Module({
  imports: [
    TheMovieDbModule.forAsyncRoot({
      useFactory: async () => {
        return {
          API_KEY: process.env.TMDB_API_KEY, // You can also pass `language` option from node-themoviedb library
        };
      },
    }),
  ],
  controllers: [TVController],
  providers: [],
  exports: [],
})
export class TvModule {}

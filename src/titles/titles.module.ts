import { Module } from '@nestjs/common';
import { TheMovieDbModule } from '@harshppatel/nestjs-themoviedb-api';

import { TitlesController } from './titles.controller';

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
  controllers: [TitlesController],
  providers: [],
  exports: [],
})
export class TitlesModule {}

import { Controller, Get, Param } from '@nestjs/common';
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';
import MovieDB from 'node-themoviedb';

// Ovo mozda mores zamijeniti umjesto movies da bude titles
@Controller('movies')
export class MoviesController {
  constructor(private readonly tmdb: TheMovieDbService) {}

  @Get('/trending/:type')
  async getMovies(@Param() params): Promise<any> {
    const args: MovieDB.Arguments.Trending.GetTrending = {
      pathParameters: {
        media_type: params.type,
        time_window: 'week',
      },
    };

    const movies = await this.tmdb.getTrendingEndpoint().getTrending(args);

    return {
      success: true,
      data: movies.data,
    };
  }
}

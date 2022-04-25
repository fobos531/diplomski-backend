import { Controller, Get } from '@nestjs/common';
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';
import MovieDB from 'node-themoviedb';

@Controller('movies')
export class MoviesController {
  constructor(private readonly tmdb: TheMovieDbService) {}

  @Get('/trending')
  async getMovies(): Promise<any> {
    const args: MovieDB.Arguments.Trending.GetTrending = {
      pathParameters: {
        media_type: 'all',
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

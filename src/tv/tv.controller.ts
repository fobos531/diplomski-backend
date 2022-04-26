import { Controller, Get, Param } from '@nestjs/common';
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';
import MovieDB from 'node-themoviedb';

@Controller('tv')
export class TVController {
  constructor(private readonly tmdb: TheMovieDbService) {}

  @Get('/trending/:type')
  async getTitles(@Param() params): Promise<any> {
    const args: MovieDB.Arguments.Trending.GetTrending = {
      pathParameters: {
        media_type: params.type,
        time_window: 'week',
      },
    };

    const titles = await this.tmdb.getTrendingEndpoint().getTrending(args);

    return {
      success: true,
      data: titles.data,
    };
  }
}

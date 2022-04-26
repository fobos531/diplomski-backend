import { Controller, Get, Param } from '@nestjs/common';
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';
import MovieDB from 'node-themoviedb';

@Controller('movies')
export class MoviesController {
  constructor(private readonly tmdb: TheMovieDbService) {}

  @Get('/:id')
  async getMovieDetails(@Param('id') id: number): Promise<any> {
    const args: MovieDB.Arguments.Movie.GetDetails = {
      pathParameters: {
        movie_id: id,
      },
      query: {
        append_to_response: 'ideos,images',
      },
    };

    const movieDetails = await this.tmdb.getMovieEndpoint().getDetails(args);

    return {
      success: true,
      data: movieDetails.data,
    };
  }
}
